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
  })

  .get('/', async (req, res, next) => {
    try {
      const discs = await Discs.getAll();
      res.json(discs);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const disc = await Discs.deleteById(req.params.id);
      res.json(disc);
    } catch (error) {
      next(error);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const disc = await Discs.updateById(req.params.id, req.body);
      res.json(disc);
    } catch (error) {
      next(error);
    }
  });
