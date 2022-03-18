const pool = require('../utils/pool');

// Discs: Id: Flight: (turn or fade) Price:

module.exports = class Discs {
  id;
  flight;
  price;

  constructor(row) {
    this.id = row.id;
    this.flight = row.flight;
    this.price = row.price;
  }

  static async insert({ flight, price }) {
    const { rows } = await pool.query(
      'INSERT INTO discs(flight, price) VALUES ($1, $2) RETURNING *;',
      [flight, price]
    );

    return new Discs(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM discs WHERE id=$1;', [id]);
    if (!rows[0]) return null;
    return new Discs(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM discs;');
    return rows.map((row) => new Discs(row));
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM discs WHERE id=$1 RETURNING *;',
      [id]
    );

    if (!rows[0]) return null;
    return new Discs(rows[0]);
  }

  static async updateById(id, attributes) {
    const existingDisc = await Discs.getById(id);
    const updatedAttributes = { ...existingDisc, ...attributes };
    const { flight, price } = updatedAttributes;

    const { rows } = await pool.query(
      'UPDATE discs SET flight=$2, price=$3 WHERE id=$1 RETURNING *;',
      [id, flight, price]
    );
    if (!rows[0]) return null;
    return new Discs(rows[0]);
  }
};
