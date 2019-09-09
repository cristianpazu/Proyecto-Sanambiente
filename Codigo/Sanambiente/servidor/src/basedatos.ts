//import keys from './keys';
//import pg from 'pg-promise';


const { Pool } = require('pg');

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'sanambiente',
  password: 'admin2019',
  port: 5432,
}
  const pool = new Pool(connectionData);
  pool.connect();
  console.log('base datos conectada');
  export default pool;
