const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const discs = require('../lib/app');
const Discs = require('../lib/models/Discs');

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
});
