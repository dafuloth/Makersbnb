const { Pool } = require('pg');
const connectionString = 'postgres://student:@localhost:5432/teamrandom_bnb';

const pool = new Pool({
  connectionString: connectionString,
});

function clean_database() {
  // const truncateUsersTable = "TRUNCATE Users";
  const truncateUsersTable = "DROP TABLE bookings";
  pool.query(truncateUsersTable, () => {
    pool.end();
  });
}

function build_database() {
  const createUsersTable = "CREATE TABLE Users2(id SERIAL PRIMARY KEY,"
                          + "name VARCHAR(20) not null,"
                          + "password VARCHAR(10) not null,"
                          + "email VARCHAR(40) not null)";

  pool.query(createUsersTable, () => {
    pool.end();
  });
}
// clean_database();
build_database();
