const { Router } = require('express');
const Pokemon = require('../models/Pokemon');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const pokemon = await Pokemon.insert(req.body);
      res.json(pokemon);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const pokemon = await Pokemon.getById(req.params.id);
      res.json(pokemon);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const pokemon = await Pokemon.getAll();
      res.json(pokemon);
    } catch (error) {
      next(error);
    }
  });

// Pokemon: Id: Type: DoesEvolve:
