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

  it('should be able to list all drinks', async () => {
    const expected = await Drinks.insert({
      temp: 'hot',
      alcoholic: 'yes',
    });
    const res = await request(app).get('/api/v1/drinks');

    expect(res.body).toEqual([
      {
        id: expect.any(String),
        temp: 'hot',
        alcoholic: true,
      },
    ]);
  });

  it('should be able to list drinks by id', async () => {
    const drinks = await Drinks.insert({ temp: 'hot', alcoholic: 'yes' });
    const res = await request(app).get(`/api/v1/drinks/${drinks.id}`);

    expect(res.body).toEqual(drinks);
  });
});
