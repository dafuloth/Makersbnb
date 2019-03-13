const dbConnection = require(`./databaseConnection`);
const poolDBConnection = dbConnection.pool;

function cleanTables() {
  constTRUNCATE users CASCADE;
  poolDBConnection.end();
}

function cleanBookingsTable() {
  console.log('In cleanBookingsTable');
  const truncateBookingsTable = "TRUNCATE bookings";
  console.log(truncateBookingsTable);
  poolDBConnection.query(truncateBookingsTable, () => {
    // poolDBConnection.end();
  });
}
function cleanSpacesTable() {
  // const truncateUsersTable = "TRUNCATE Users";
  const truncateSpacesTable = "TRUNCATE spaces";
  console.log(truncateSpacesTable);
  poolDBConnection.query(truncateSpacesTable, () => {
    // poolDBConnection.end();
  });
}
function cleanUsersTable() {
  // const truncateUsersTable = "TRUNCATE Users";
  const truncateUsersTable = "TRUNCATE users";
  console.log(truncateUsersTable);
  poolDBConnection.query(truncateUsersTable, () => {
    // poolDBConnection.end();
  });
}
function buildDatabase() {
  const createUsersTableString = "CREATE TABLE Users(id SERIAL PRIMARY KEY,"
                          + "name VARCHAR(20) not null,"
                          + "password VARCHAR(10) not null,"
                          + "email VARCHAR(40) not null)";

  poolDBConnection.query(createUsersTableString, () => {
    poolDBConnection.end();
  });
}

function signUp(userName,password,email) {
  console.log(userName);
  const signUpUserString = "INSERT INTO users (username, userpassword, useremail) "
                   + "VALUES ('"+userName+"','"+ password+"','"+ email+"');"
  console.log(signUpUser);

  poolDBConnection.query(signUpUserString, (err, res) => {
    poolDBConnection.end();
  });
} // signUp

function getAllSpaces() {
  const getAllSpacesString= "SELECT spacename FROM spaces";

  var  x = poolDBConnection.query(getAllSpacesString, (err, res) => {
    console.log('spaces are ...',res.rows[0],' isnt that nice');
    poolDBConnection.end();
  });
} //get_all_spaces

cleanTables();
