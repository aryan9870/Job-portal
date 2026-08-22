import db from "../config/pgdb.js";

export const findUserByEmail = async (email) => {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

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
