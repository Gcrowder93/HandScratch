const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Games = require('../lib/models/Games');

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to create a post', async () => {
    const res = await request(app)
      .post('/api/v1/games')
      .send({ name: 'borderlands', rating: '9.5' });

    // expect(res.body).toEqual({
    //   id: expect.any(String),
    //   name: 'borderlands',
    //   rating: '9.5',
    // });
  });
});
