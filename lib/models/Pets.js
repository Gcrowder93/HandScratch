const pool = require('../utils/pool');

module.exports = class Pets {
  id;
  name;
  age;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
  }

  static async insert({ name, age }) {
    const { rows } = await pool.query(
      'INSERT INTO pets(name, age) VALUES ($1, $2) RETURNING *;',
      [name, age]
    );

    return new Pets(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM pets;');
    return rows.map((row) => Pets(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM pets WHERE id=$1;', [id]);
    if (!rows[0]) return null;
    return new Pets(rows[0]);
  }

  static async updateById(id, attributes) {
    const existingPet = await Pets.getById(id);
    const updatedATT = { ...existingPet, ...attributes };
    const { name, age } = updatedATT;

    const { rows } = await pool.query(
      'UPDATE pets SET name=$2, age=$3 WHERE id=$1 RETURNING *;',
      [id, name, age]
    );

    if (!rows[0]) return null;
    return new Pets(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM pets WHERE id=$1 RETURNING *;',
      [id]
    );

    if (!rows[0]) return null;
    return new Pets(rows[0]);
  }
};
