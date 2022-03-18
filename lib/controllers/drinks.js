const { Router } = require('express');
const Drinks = require('../models/Drinks');

module.exports = Router()
  .post('/', async (req, res) => {
    try {
      const drinks = await Drinks.insert(req.body);
      res.json(drinks);
    } catch (error) {
      res.status(500).send(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const drinks = await Drinks.getAll();
      res.json(drinks);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const drinks = await Drinks.getById(req.params.id);
      res.json(drinks);
    } catch (error) {
      next(error);
    }
  })

  .patch('/:id', async (req, res) => {
    const drink = await Drinks.updateById(req.params.id, req.body);
    res.json(drink);
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const drink = await Drinks.deleteById(req.params.id);
      res.json(drink);
    } catch (error) {
      next(error);
    }
  });

// Drinks: Id: Temp: Alcoholic:
