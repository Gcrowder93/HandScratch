const { Router } = require('express');
const Pets = require('../models/Pets');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const pet = await Pets.insert(req.body);
    res.json(pet);
  } catch (error) {
    next(error);
  }
});

// Pets: Id: Name: Age:
