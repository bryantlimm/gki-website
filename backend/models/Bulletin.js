const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

class Bulletin {
    static async create(title, text, photo) {
        const res = await pool.query(
            'INSERT INTO bulletins (title, text, photo) VALUES ($1, $2, $3) RETURNING *',
            [title, text, photo]
        );
        return res.rows[0];
    }

    static async getAll() {
        const res = await pool.query('SELECT * FROM bulletins');
        return res.rows;
    }

    static async delete(id) {
        await pool.query('DELETE FROM bulletins WHERE id = $1', [id]);
    }

    static async update(id, title, text, photo) {
        const res = await pool.query(
            'UPDATE bulletins SET title = $1, text = $2, photo = $3 WHERE id = $4 RETURNING *',
            [title, text, photo, id]
        );
        return res.rows[0];
    }
}

module.exports = Bulletin;
