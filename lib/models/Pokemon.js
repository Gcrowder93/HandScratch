const pool = require('../utils/pool');

module.exports = class Pokemon {
  id;
  type;
  doesEvolve;

  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.doesEvolve = row.doesEvolve;
  }

  static async insert({ type, doesEvolve }) {
    const { rows } = await pool.query(
      'INSERT INTO pokemon(type, doesEvolve) VALUES ($1, $2) RETURNING *;',
      [type, doesEvolve]
    );

    return new Pokemon(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM pokemon WHERE id=$1;', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Pokemon(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM pokemon;');
    return rows.map((row) => Pokemon(row));
  }
};
