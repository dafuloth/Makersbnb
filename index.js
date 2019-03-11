const { Pool } = require('pg');

const connectionString = 'postgres://student:@localhost:5432/teamRandom_bnb';

const pool = new Pool({
  connectionString: connectionString,
})

const createUsersTable = "CREATE TABLE users(id SERIAL PRIMARY KEY," +
              "name VARCHAR(20) not null," + 
              "password VARCHAR(10) not null," +
              "email VARCHAR(40) not null)";

// const createSpaceTable = "CREATE TABLE users(id SERIAL PRIMARY KEY," +
//               "name VARCHAR(20) not null," + 
//               "password VARCHAR(10) not null," +
//               "email VARCHAR(40) not null)";

pool.query(createUsersTable, () => {
  pool.end()
})
