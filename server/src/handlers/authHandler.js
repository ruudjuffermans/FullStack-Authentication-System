const pool = require('../db');

// Find a user by email
async function findUserByEmail(email) {
    const result = await pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
    );
    return result.rows[0];
}

// Create a new user
async function createUser(email, passwordHash, firstname, lastname) {
    const result = await pool.query(
        `INSERT INTO users (email, password_hash, firstname, lastname)
         VALUES ($1, $2, $3, $4) 
         RETURNING *`,
        [email, passwordHash, firstname, lastname]
    );
    return result.rows[0];
}

// Create a new user
async function createAdminUser(email, passwordHash, firstname, lastname) {
    const result = await pool.query(
        `INSERT INTO users (email, password_hash, firstname, lastname, role, is_active)
         VALUES ($1, $2, $3, $4, 'admin', TRUE) 
         RETURNING *`,
        [email, passwordHash, firstname, lastname]
    );
    return result.rows[0];
}


// Activate a user
async function activateUser(userId) {
    await pool.query(
        `UPDATE users 
         SET is_active = TRUE 
         WHERE id = $1`,
        [userId]
    );
}

module.exports = {
    findUserByEmail,
    createUser,
    activateUser,
    createAdminUser
};
