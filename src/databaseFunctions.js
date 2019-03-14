const dbConnection = require(`./databaseConnection`);
const poolDBConnection = dbConnection.pool;

var signUp;
exports.signUp =  function (userName,email, password) {
  const signUpUserStr = "INSERT INTO users (username, userpassword, useremail) "
                   + "VALUES ('"+userName+"','"+ password+"','"+ email+"');"
  poolDBConnection.query(signUpUserStr, (err, res) => {
  });
}; // signUp

var login
exports.login = function(username, password) {
  return new Promise(function(resolve, reject){
    const loginStr = "SELECT * FROM users WHERE userpassword ='"
                        + password + "' AND username ='"
                        + username + "';"
    poolDBConnection.query(loginStr, function(err, res){
      if(err){
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

exports.getAllSpaces = function() {
  return new Promise(function(resolve, reject){
    const getAllSpacesStr = "SELECT * FROM spaces";
      poolDBConnection.query(getAllSpacesStr, function(err, res){
        if(err){
          reject(err)
        }else{
          resolve(res)
        }
      })
    })
  }

  exports.bookSpacePending = function(spaceId, guestId, startDate, endDate) {
    return new Promise(function(resolve, reject){
      const bookSpacePendingStr = "INSERT INTO bookings (spaceId, guestId, bookingstartDate, bookingendDate, bookingConfirmed) "
                       + "VALUES ('"+spaceId+"','"+ guestId+"','"+ startDate+"','"+ endDate+"', false);"
                       console.log(bookSpacePendingStr);
        poolDBConnection.query(bookSpacePendingStr, function(err, res){
          if(err){
            reject(err)
          }else{
            resolve(res)
          }
        })
      })
    }

    exports.confirmBookedSpace = function(bookingId) {
      return new Promise(function(resolve, reject){
        const bookSpacePendingStr = "UPDATE bookings "
                + "SET bookingConfirmed = true "
                + "WHERE bookingId = bookingId);"
                console.log(bookSpacePendingStr);
          poolDBConnection.query(bookSpacePendingStr, function(err, res){
            if(err){
              reject(err)
            }else{
              resolve(res)
            }
          })
        })
      }
