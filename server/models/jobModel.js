import { db } from "../config/db.js";
export const createJobDB = async ({
  title,
  location,
  level,
  description,
  salary,
  category,
  visible,
  createdBy,
}) => {
  const result = await db.query(
    `
    INSERT INTO jobs
    (title, location, level, description, salary, category, visible, created_by)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `,
    [title, location, level, description, salary, category, visible, createdBy],
  );

  return result.rows[0];
};

export const getAllJobsDB = async () => {
  const result = await db.query(`
    SELECT j.*, u.name, u.image
    FROM jobs j
    JOIN users u
    ON j.created_by = u.id
    WHERE j.visible = true
  `);

  return result.rows;
};

export const getJobByIdDB = async (id) => {
  const result = await db.query(
    `
    SELECT j.*, u.name, u.image
    FROM jobs j
    JOIN users u
    ON j.created_by = u.id
    WHERE j.id = $1
    `,
    [id],
  );

  return result.rows[0];
};

export const getRecruiterJobsDB = async (recruiterId) => {
  const result = await db.query(
    `
    SELECT 
      j.*,
      COUNT(a.id)::int AS applicants_count
    FROM jobs j
    LEFT JOIN applications a
      ON j.id = a.job_id
    WHERE j.created_by = $1
    GROUP BY j.id
    `,
    [recruiterId],
  );

  return result.rows;
};

export const toggleJobVisibilityDB = async (jobId, recruiterId) => {
  const result = await db.query(
    `
    UPDATE jobs
    SET visible = NOT visible
    WHERE id = $1 AND created_by = $2
    RETURNING *
    `,
    [jobId, recruiterId],
  );

  return result.rows[0];
};
