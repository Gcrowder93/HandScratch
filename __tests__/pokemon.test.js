const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Pokemon = require('../lib/models/Pokemon');

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to create a post', async () => {
    const res = await request(app)
      .post('/api/v1/songs')
      .send({ type: 'fire', doesEvolve: true });
  });
});
