import { Pool } from 'pg';
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const port = Number(process.env.DB_PORT);

const pool = new Pool({ host, database: 'books', port });

export default pool;








