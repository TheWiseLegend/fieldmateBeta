import pg from "pg";

// Database connection
export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "fieldmate",
    password: "25717204",
    port: 5432,
  });

export function dbConnect() {
    pool.connect()
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Database connection error", err));
}

export default pool;