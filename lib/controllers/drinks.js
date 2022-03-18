const { Router } = require('express');
const Drinks = require('../models/Drinks');

module.exports = Router().post('/', async (req, res) => {
  try {
    const drinks = await Drinks.insert(req.body);
    res.json(drinks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Drinks: Id: Temp: Alcoholic:
