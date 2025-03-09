const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

// Submit code for review (POST /review)
router.post('/', authMiddleware, reviewController.submitReview);

// Get review history (GET /review)
router.get('/', authMiddleware, reviewController.getReviews);

module.exports = router;
