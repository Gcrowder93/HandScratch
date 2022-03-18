const { Router } = require('express');
const Pets = require('../models/Pets');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const pet = await Pets.insert(req.body);
      res.json(pet);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const pets = await Pets.getAll();
      res.json(pets);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const pet = await Pets.getById(req.params.id);
      res.json(pet);
    } catch (error) {
      next(error);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const pet = await Pets.updateById(req.params.id);
      res.json(pet);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const pet = await Pets.deleteById(req.params.id);
      res.json(pet);
    } catch (error) {
      next(error);
    }
  });

// Pets: Id: Name: Age:
