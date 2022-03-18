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
      .send({ name: 'borderlands', rating: '9' });
  });

  it('should be able to list games by id', async () => {
    const game = await Games.insert({ name: 'borderlands', rating: '9' });
    const res = await request(app).get(`/api/v1/games/${game.id}`);

    expect(res.body).toEqual(game);
  });

  it('should be able to list all games', async () => {
    const expected = await Games.insert({
      name: 'borderlands',
      rating: '9',
    });
    const res = await request(app).get('/api/v1/games');

    expect(res.body).toEqual([
      {
        id: expect.any(String),
        name: 'borderlands',
        rating: 9,
      },
    ]);
  });

  it('should be able to delete a game', async () => {
    const game = await Games.insert({ name: 'borderlands', rating: '9' });
    const res = await request(app).delete(`/api/v1/games/${game.id}`);

    expect(res.body).toEqual(game);
    expect(await Games.getById(game.id)).toBeNull();
  });

  it('should be able to update a game', async () => {
    const game = await Games.insert({ name: 'borderlands', rating: '9' });
    const res = await request(app)
      .patch(`/api/v1/games/${game.id}`)
      .send({ name: 'borderlands 2' });

    const expected = {
      id: expect.any(String),
      name: 'borderlands 2',
      rating: 9,
    };

    expect(res.body).toEqual(expected);
    expect(await Games.getById(game.id)).toEqual(expected);
  });
});
