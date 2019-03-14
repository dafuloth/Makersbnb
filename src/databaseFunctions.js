const dbConnection = require(`./databaseConnection`);
const poolDBConnection = dbConnection.pool;

// function cleanTables() {
//   constTRUNCATE users CASCADE;
//   poolDBConnection.end();
// }
//
// function cleanBookingsTable() {
//   console.log('In cleanBookingsTable');
//   const truncateBookingsTable = "TRUNCATE bookings";
//   console.log(truncateBookingsTable);
//   poolDBConnection.query(truncateBookingsTable, () => {
//     // poolDBConnection.end();
//   });
// }
// function cleanSpacesTable() {
//   // const truncateUsersTable = "TRUNCATE Users";
//   const truncateSpacesTable = "TRUNCATE spaces";
//   console.log(truncateSpacesTable);
//   poolDBConnection.query(truncateSpacesTable, () => {
//     // poolDBConnection.end();
//   });
// }
// function cleanUsersTable() {
//   // const truncateUsersTable = "TRUNCATE Users";
//   const truncateUsersTable = "TRUNCATE users";
//   console.log(truncateUsersTable);
//   poolDBConnection.query(truncateUsersTable, () => {
//     // poolDBConnection.end();
//   });
// }
// function buildDatabase() {
//   const createUsersTableString = "CREATE TABLE Users(id SERIAL PRIMARY KEY,"
//                           + "name VARCHAR(20) not null,"
//                           + "password VARCHAR(10) not null,"
//                           + "email VARCHAR(40) not null)";
//
//   poolDBConnection.query(createUsersTableString, () => {
//     poolDBConnection.end();
//   });
// }
var signUp;
exports.signUp =  function (userName,email, password) {
  console.log(userName);
  const signUpUserString = "INSERT INTO users (username, userpassword, useremail) "
                   + "VALUES ('"+userName+"','"+ password+"','"+ email+"');"
  console.log(signUpUserString);

  poolDBConnection.query(signUpUserString, (err, res) => {
    // poolDBConnection.end();
  });
}; // signUp

var login
var rowCount
exports.login = function(username, password) {
  return new Promise(function(resolve, reject){
    const loginString = "SELECT * FROM users WHERE userpassword ='"
                        + password + "' AND username ='"
                        + username + "';"
    poolDBConnection.query(loginString, function(err, res){
      if(err){
        reject(err)
      }else{
        resolve(res)
      }
    })
  })
}


  var  x = poolDBConnection.query(getAllSpacesString, (err, res) => {
    console.log('spaces are ...',res.rows[0],' isnt that nice');
    poolDBConnection.end();
  });
} // get_all_spaces
=======

exports.getAllSpaces = function() {
  return new Promise(function(resolve, reject){
    const getAllSpacesString= "SELECT * FROM spaces";
      poolDBConnection.query(getAllSpacesString, function(err, res){
        if(err){
          reject(err)
        }else{
          resolve(res)
        }
      })
    })
  }
