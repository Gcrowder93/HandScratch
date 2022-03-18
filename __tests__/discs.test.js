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

  it('should be able to list discs', async () => {
    const expected = await Discs.insert({
      flight: 'turn',
      price: 15,
    });
    const res = await request(app).get('/api/v1/discs');

    expect(res.body).toEqual([
      {
        id: expect.any(String),
        flight: 'turn',
        price: 15,
      },
    ]);
  });

  it('should be able to delete a disc', async () => {
    const disc = await Discs.insert({ flight: 'turn', price: 15 });
    const res = await request(app).delete(`/api/v1/discs/${disc.id}`);

    expect(res.body).toEqual(disc);
    expect(await Discs.getById(disc.id)).toBeNull();
  });
});
