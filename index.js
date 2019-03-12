const { Pool } = require('pg');

const connectionString = 'postgres://student:@localhost:5432/teamRandom_bnb';

const pool = new Pool({
  connectionString: connectionString,
})


pool.query(createUsersTable, () => {
  pool.end()
})
