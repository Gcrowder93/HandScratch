const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Discs = require('../lib/models/Discs');
// Discs: Id: Flight: (turn or fade) Price:

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to post a disc', async () => {
    const expected = {
      id: expect.any(String),
      flight: 'turn',
      price: '14.99',
    };
    const res = await request(app).post('/api/v1/discs').send(expected);
  });
});
