CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(180) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS bugs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  difficulty VARCHAR(20) NOT NULL
    CHECK (difficulty IN ('Easy', 'Medium', 'Hard'))
);

CREATE TABLE IF NOT EXISTS attempts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  bug_id INTEGER NOT NULL REFERENCES bugs(id) ON DELETE CASCADE,
  status VARCHAR(20) NOT NULL
    CHECK (status IN ('passed', 'failed')),
  time_spent_seconds INTEGER NOT NULL CHECK (time_spent_seconds >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_attempt_user ON attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempt_bug ON attempts(bug_id);
