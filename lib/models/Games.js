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

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM games WHERE id=$1;', [id]);
    if (!rows[0]) return null;
    return new Games(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM games;');
    return rows.map((row) => new Games(row));
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM games WHERE id=$1 RETURNING *;',
      [id]
    );

    if (!rows[0]) return null;
    return new Games(rows[0]);
  }

  static async updateById(id, attributes) {
    const existingGame = await Games.getById(id);
    const updatedAttributes = { ...existingGame, ...attributes };
    const { name, rating } = updatedAttributes;

    const { rows } = await pool.query(
      'UPDATE games SET name=$2, rating=$3 WHERE id=$1 RETURNING *;',
      [id, name, rating]
    );

    if (!rows[0]) return null;
    return new Games(rows[0]);
  }
};
