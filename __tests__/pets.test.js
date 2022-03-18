const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Pets = require('../lib/models/Pets');

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
      .send({ name: 'sophie', age: '10' });
  });

  it('should be able to list all pets', async () => {
    const expected = await Pets.insert({
      name: 'sophie',
      age: '10',
    });
    const res = await request(app).get('/api/v1/pets');
  });

  it('should be able to list pets by id', async () => {
    const pets = await Pets.insert({ name: 'sophie', age: '10' });
    const res = await request(app).get(`/api/v1/pets/${pets.id}`);

    expect(res.body).toEqual(pets);
  });

  it('should be able to update a pet', async () => {
    const pet = await Pets.insert({ name: 'sophie', age: '11' });
    const res = await request(app)
      .patch(`/api/v1/pets/${pet.id}`)
      .send({ age: '11' });

    const expected = {
      id: expect.any(String),
      name: 'sophie',
      age: 11,
    };

    expect(res.body).toEqual(expected);
    expect(await Pets.getById(pet.id)).toEqual(expected);
  });

  it('should be able to delete a pet', async () => {
    const pet = await Pets.insert({ name: 'sophie', age: '11' });
    const res = await request(app).delete(`/api/v1/pets/${pet.id}`);

    expect(res.body).toEqual(pet);
    expect(await Pets.getById(pet.id)).toBeNull();
  });
});
