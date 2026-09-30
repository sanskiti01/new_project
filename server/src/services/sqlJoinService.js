import pg from "pg";

const { Pool } = pg;

let pool;

function getPool() {
  if (!pool) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not configured.");
    }
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

export async function getJoinResults() {
  const db = getPool();

  const { rows } = await db.query(`
    SELECT
      u.name AS user_name,
      u.email,
      b.title AS bug_title,
      a.status,
      a.time_spent_seconds,
      a.created_at
    FROM users u
    INNER JOIN attempts a ON a.user_id = u.id
    INNER JOIN bugs b ON b.id = a.bug_id
    ORDER BY a.created_at DESC;
  `);

  return rows;
}

export async function getAllUsersIncludingNoAttempts() {
  const db = getPool();

  const { rows } = await db.query(`
    SELECT
      u.id,
      u.name,
      COUNT(a.id)::int AS attempt_count
    FROM users u
    LEFT JOIN attempts a ON a.user_id = u.id
    GROUP BY u.id, u.name
    ORDER BY u.id;
  `);

  return rows;
}
