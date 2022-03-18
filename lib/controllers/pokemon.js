const { Router } = require('express');
const Pokemon = require('../models/Pokemon');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const pokemon = await Pokemon.insert(req.body);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
});

// Pokemon: Id: Type: DoesEvolve:
