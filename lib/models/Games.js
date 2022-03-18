const pool = require('../utils/pool');

module.exports = class Games {
  id;
  name;
  rating;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.rating = row.rating;
  }

  static async insert({ name, rating }) {
    const { rows } = await pool.query(
      'INSERT INTO games(name, rating) VALUES ($1, $2) RETURNING *;',
      [name, rating]
    );

    return new Games(rows[0]);
  }
};
