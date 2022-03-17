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
      price: 15,
    };
    const res = await request(app).post('/api/v1/discs').send(expected);
  });

  it('should be able to list discs by id', async () => {
    const disc = await Discs.insert({ flight: 'turn', price: 15 });
    const res = await request(app).get(`/api/v1/discs/${disc.id}`);

    expect(res.body).toEqual(disc);
  });
});
