describe('Database setup', () => {
  const { Pool } = require('pg');
  const connectionString = 'postgres://student:@localhost:5432/teamRandom_bnb';

  const pool = new Pool({
    connectionString: connectionString,
  });

  it('can set up Users table', () => {
    pool.query(truncateUsersTable, () => {
      pool.end();
    });
  });

  // pool.query(truncateUsersTable, () => {
  //   pool.end();
  // });
      
});