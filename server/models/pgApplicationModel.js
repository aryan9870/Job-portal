import db from "../config/pgdb.js";

// Check if application already exists
export const getExistingApplicationDB = async ({ jobId, applicantId }) => {
  const result = await db.query(
    `
    SELECT *
    FROM applications
    WHERE job_id = $1
    AND applicant_id = $2
    `,
    [jobId, applicantId],
  );

  return result.rows[0];
};

// Create application
export const createApplicationDB = async ({
  jobId,
  applicantId,
  status,
  resume,
}) => {
  const result = await db.query(
    `
    INSERT INTO applications
    (job_id, applicant_id, status, resume)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [jobId, applicantId, status, resume],
  );

  return result.rows[0];
};

// Get applications of logged-in user
export const getUserApplicationsDB = async (userId) => {
  const result = await db.query(
    `
    SELECT
      a.id,
      a.status,
      a.created_at,

      j.id AS job_id,
      j.title AS job_title,
      j.location AS job_location,
      j.created_by,

      u.id AS recruiter_id,
      u.name AS recruiter_name,
      u.email AS recruiter_email,
      u.image AS recruiter_image

    FROM applications a

    JOIN jobs j
      ON a.job_id = j.id

    JOIN users u
      ON j.created_by = u.id

    WHERE a.applicant_id = $1
    `,
    [userId],
  );

  return result.rows;
};

// Get applications for logged-in recruiter
export const getRecruiterApplicationsDB = async (recruiterId) => {
  const result = await db.query(
    `
    SELECT
      a.id,
      a.status,
      a.resume,
      a.created_at,

      u.id AS applicant_id,
      u.name AS applicant_name,
      u.email AS applicant_email,
      u.image AS applicant_image,

      j.id AS job_id,
      j.title AS job_title,
      j.location AS job_location

    FROM applications a

    JOIN jobs j
      ON a.job_id = j.id

    JOIN users u
      ON a.applicant_id = u.id

    WHERE j.created_by = $1
    `,
    [recruiterId],
  );

  return result.rows;
};

// Update application status
export const updateApplicationStatusDB = async ({
  applicationId,
  status,
  recruiterId,
}) => {
  const result = await db.query(
    `
    UPDATE applications a
    SET status = $1
    FROM jobs j
    WHERE a.id = $2
    AND a.job_id = j.id
    AND j.created_by = $3
    RETURNING a.*;
    `,
    [status, applicationId, recruiterId],
  );

  return result.rows[0];
};
