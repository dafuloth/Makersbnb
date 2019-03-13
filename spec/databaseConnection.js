const { Pool } = require('pg');
const connectionString = 'postgres://student:@localhost:5432/teamrandom_bnb';


exports.pool = new Pool({
  connectionString: connectionString,
});
