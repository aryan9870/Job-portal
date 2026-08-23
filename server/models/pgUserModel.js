import db from "../config/pgdb.js";

export const findUserByEmail = async (email) => {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  return result.rows[0];
};

export const findUserById = async (id) => {
  const result = await db.query(
    `SELECT id, name, email, role, image, resume
     FROM users
     WHERE id = $1`,
    [id]
  );

  return result.rows[0];
};

export const createUser = async ({ name, email, password, role, image }) => {
  const result = await db.query(
    `INSERT INTO users
        (name, email, password, role, image)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
    [name, email, password, role, image],
  );

  return result.rows[0];
};

export const updateUserResume = async (id, resume) => {
  const result = await db.query(
    `UPDATE users
     SET resume = $1
     WHERE id = $2
     RETURNING *`,
    [resume, id]
  );

  return result.rows[0];
};

