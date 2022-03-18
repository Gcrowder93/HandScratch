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
};
