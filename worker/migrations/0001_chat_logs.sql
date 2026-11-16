CREATE TABLE IF NOT EXISTS chat_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  participant_code TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('lali', 'aban', 'dog')),
  question_type TEXT NOT NULL CHECK (question_type IN ('preset', 'free')),
  user_message TEXT NOT NULL,
  ai_reply TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_chat_logs_participant ON chat_logs(participant_code);
CREATE INDEX IF NOT EXISTS idx_chat_logs_role ON chat_logs(role);
CREATE INDEX IF NOT EXISTS idx_chat_logs_created_at ON chat_logs(created_at);
