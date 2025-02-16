import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, 'opencaller.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Database error:', err.message);
    else console.log('Connected to SQLite database.');
});

// Create API request history table
db.run(`CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    method TEXT,
    url TEXT,
    headers TEXT,
    body TEXT,
    response TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

export default db;

