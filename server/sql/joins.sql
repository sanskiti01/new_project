-- Sample data
INSERT INTO users (name, email)
VALUES
  ('Aarav', 'aarav@example.com'),
  ('Meera', 'meera@example.com'),
  ('Kabir', 'kabir@example.com')
ON CONFLICT (email) DO NOTHING;

INSERT INTO bugs (title, difficulty)
VALUES
  ('Promise chain breaks', 'Medium'),
  ('JOIN returns duplicate rows', 'Hard'),
  ('React composition bug', 'Easy')
ON CONFLICT DO NOTHING;

-- Keep this demo seed idempotent enough for classroom use.
INSERT INTO attempts (user_id, bug_id, status, time_spent_seconds)
SELECT u.id, b.id, 'passed', 210
FROM users u CROSS JOIN bugs b
WHERE u.email = 'aarav@example.com'
  AND b.title = 'Promise chain breaks'
  AND NOT EXISTS (
    SELECT 1 FROM attempts a
    WHERE a.user_id = u.id AND a.bug_id = b.id
  );

INSERT INTO attempts (user_id, bug_id, status, time_spent_seconds)
SELECT u.id, b.id, 'failed', 480
FROM users u CROSS JOIN bugs b
WHERE u.email = 'meera@example.com'
  AND b.title = 'JOIN returns duplicate rows'
  AND NOT EXISTS (
    SELECT 1 FROM attempts a
    WHERE a.user_id = u.id AND a.bug_id = b.id
  );

-- 1. INNER JOIN: only users who have attempts.
SELECT u.name, b.title, a.status
FROM users u
INNER JOIN attempts a ON a.user_id = u.id
INNER JOIN bugs b ON b.id = a.bug_id;

-- 2. LEFT JOIN: every user remains in the result.
SELECT u.name, COUNT(a.id) AS attempt_count
FROM users u
LEFT JOIN attempts a ON a.user_id = u.id
GROUP BY u.id, u.name
ORDER BY u.id;

-- 3. Aggregation across related tables.
SELECT
  b.title,
  COUNT(a.id) AS attempts,
  ROUND(AVG(a.time_spent_seconds), 2) AS average_time
FROM bugs b
LEFT JOIN attempts a ON a.bug_id = b.id
GROUP BY b.id, b.title
ORDER BY attempts DESC;
