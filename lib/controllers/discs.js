const { Router } = require('express');
const Discs = require('../models/Discs');
// Discs: Id: Flight: (turn or fade) Price:

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const disc = await Discs.insert(req.body);
      res.json(disc);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const disc = await Discs.getById(req.params.id);
      res.json(disc);
    } catch (error) {
      next(error);
    }
  });
