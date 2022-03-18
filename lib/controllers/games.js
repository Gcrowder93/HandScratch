const { Router } = require('express');
const Games = require('../models/Games');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const game = await Games.insert(req.body);
    res.json(game);
  } catch (error) {
    next(error);
  }
});

// Games: Id: Name: Rating:
