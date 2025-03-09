require('dotenv').config();
const express = require('express');
const app = express();
const dbConnect = require('./config/db');

// Connect to MongoDB
dbConnect();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/review', require('./routes/review'));

// Serve static files (e.g. our simple HTML UI)
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
