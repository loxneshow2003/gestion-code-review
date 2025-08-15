const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// Créer une nouvelle revue
router.post('/', async (req, res) => {
  const review = new Review(req.body);
  try {
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Récupérer toutes les revues
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
