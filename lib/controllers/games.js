const { Router } = require('express');
const Games = require('../models/Games');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const game = await Games.insert(req.body);
      res.json(game);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const game = await Games.getById(req.params.id);
      res.json(game);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const games = await Games.getAll();
      res.json(games);
    } catch (error) {
      new error();
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const game = await Games.deleteById(req.params.id);
      res.json(game);
    } catch (error) {
      next(error);
    }
  })

  .patch('/:id', async (req, res) => {
    const game = await Games.updateById(req.params.id, req.body);
    res.json(game);
  });
