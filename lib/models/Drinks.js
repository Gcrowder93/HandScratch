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
};
