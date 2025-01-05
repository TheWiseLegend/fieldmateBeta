import pg from 'pg';

export const db = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '25717204',
  port: 5432
});

export function dbConnect() {
  db.connect()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database connection error', err));
}

export default db;
