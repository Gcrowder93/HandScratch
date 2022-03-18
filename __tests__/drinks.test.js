const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Drinks = require('../lib/models/Drinks');

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to post a drink', async () => {
    const res = await request(app)
      .post('/api/v1/songs')
      .send({ temp: 'hot', alcoholic: 'yes' });
  });
});
