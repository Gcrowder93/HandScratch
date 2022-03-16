const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const drinks = require('../lib/app');
const Drinks = require('../lib/models/Drinks');

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
});
