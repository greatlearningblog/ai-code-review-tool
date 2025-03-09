const Review = require('../models/Review');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.submitReview = async (req, res) => {
    const { code } = req.body;
    if (!code) return res.status(400).json({ message: 'Code is required' });
    
    try {
        // Create a prompt for the AI to review the code
        const prompt = `You are a code review assistant. Please analyze the following code for syntax errors, performance issues, security vulnerabilities, and adherence to best practices. Provide a detailed review report with suggestions for improvements.

Code:
${code}

Review:`;
        
        // Call OpenAI API to generate a review report
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 300,
            temperature: 0.2,
        });
        
        const reviewReport = response.data.choices[0].text.trim();
        
        // Save the review in the database
        const review = new Review({
            user: req.user.id,
            code,
            reviewReport
        });
        await review.save();
        
        res.json({ reviewReport });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
