/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable semi */
const dbConnection = require(`./databaseConnection`);
const poolDBConnection = dbConnection.pool;

var signUp;
exports.signUp = function (userName, email, password) {
  const signUpUserString = "INSERT INTO users (username, userpassword, useremail) "
                   + "VALUES ('" + userName + "','" + password + "','" + email + "');"

  poolDBConnection.query(signUpUserString, (err, res) => {
  });
}; // signUp

var login
var rowCount
exports.login = function (username, password) {
  return new Promise(function (resolve, reject) {
    const loginString = "SELECT * FROM users WHERE userpassword ='"
                        + password + "' AND username ='"
                        + username + "';"
    poolDBConnection.query(loginString, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}


exports.getAllSpaces = function () {
  return new Promise(function (resolve, reject) {
    const getAllSpacesString = "SELECT * FROM spaces";
    poolDBConnection.query(getAllSpacesString, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}
