const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const pets = require('../lib/app');
const Pets = require('../lib/models/Pets');

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
});
