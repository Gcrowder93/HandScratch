const pool = require('../utils/pool');

module.exports = class Drinks {
  id;
  temp;
  alcoholic;

  constructor(row) {
    this.id = row.id;
    this.temp = row.temp;
    this.alcoholic = row.alcoholic;
  }

  static async insert({ temp, alcoholic }) {
    const { rows } = await pool.query(
      'INSERT INTO drinks(temp, alcoholic) VALUES ($1, $2) RETURNING *;',
      [temp, alcoholic]
    );
    return new Drinks(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM drinks;');
    return rows.map((row) => new Drinks(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM drinks WHERE id=$1;', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Drinks(rows[0]);
  }
};
