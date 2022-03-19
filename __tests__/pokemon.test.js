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
      .post('/api/v1/pokemon')
      .send({ type: 'fire', doesEvolve: true });
  });

  it('should be able to list pokemon by id', async () => {
    const pokemon = await Pokemon.insert({ type: 'fire', doesEvolve: true });
    const res = await request(app).get(`/api/v1/pokemon/${pokemon.id}`);

    expect(res.body).toEqual(pokemon);
  });

  it('should be able to list all pokemon', async () => {
    const expected = await Pokemon.insert({
      type: 'fire',
      doesEvolve: 'true',
    });
    const res = await request(app).get('/api/v1/pokemon');
  });
});
