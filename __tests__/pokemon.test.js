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

  it('should be able to update a pokemon', async () => {
    const pokemon = await Pokemon.insert({ type: 'water', doesEvolve: 'true' });
    const res = await request(app)
      .patch(`/api/v1/pokemon/${pokemon.id}`)
      .send({ type: 'water' });

    const expected = {
      id: expect.any(String),
      type: 'water',
      //   doesEvolve: true,
    };

    expect(res.body).toEqual(expected);
    expect(await Pokemon.getById(pokemon.id)).toEqual(expected);
  });

  it('should be able to delete a pokemon', async () => {
    const pokemon = await Pokemon.insert({ type: 'water', doesEvolve: 'true' });
    const res = await request(app).delete(`/api/v1/pokemon/${pokemon.id}`);

    expect(res.body).toEqual(pokemon);
    expect(await Pokemon.getById(pokemon.id)).toBeNull();
  });
});
