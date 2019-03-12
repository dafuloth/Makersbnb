const dbConnection = require(`./databaseConnection`);
const poolDBConnection = dbConnection.pool;

function clean_database() {
  // const truncateUsersTable = "TRUNCATE Users";
  const truncateUsersTable = "DROP TABLE bookings";
  poolDBConnection.query(truncateUsersTable, () => {
    poolDBConnection.end();
  });
}

function build_database() {
  const createUsersTable = "CREATE TABLE Users3(id SERIAL PRIMARY KEY,"
                          + "name VARCHAR(20) not null,"
                          + "password VARCHAR(10) not null,"
                          + "email VARCHAR(40) not null)";

  poolDBConnection.query(createUsersTable, () => {
    poolDBConnection.end();
  });
}

function signUp(userName,password,email) {
  console.log(userName);
  const signUpUser = "INSERT INTO users (username, userpassword, useremail) "
                   + "VALUES ('"+userName+"','"+ password+"','"+ email+"');"
  console.log(signUpUser);

  poolDBConnection.query(signUpUser, (err, res) => {
    poolDBConnection.end();
  });
} // signUp

function get_all_spaces() {
  const getAllSpaces = "SELECT spacename FROM spaces";

  var  x = poolDBConnection.query(getAllSpaces, (err, res) => {
    console.log('spaces are ...',res.rows[0],' isnt that nice');
    poolDBConnection.end();
  });
} //get_all_spaces
