var db = require('./databaseFunctions')
function User() {

}

User.prototype.login = async function (username, password ) {
  // On success !this.userId = userId
  this.username = username
  this.userPassword = password
  // this.userEmail = userEmail
  try {
    var result = await db.login(this.username, this.userPassword)
  } catch(error){
    console.log(error)
  }
  if (result.rowCount == 1){
    this.userEmail = result.rows[0].useremail
    this.userId = result.rows[0].userid
    return true
  }else{
    return false
  }
  // var result = db.login(this.username, this.userPassword)
  // .then(function(result){
  //   this.userEmail = result.rows[0].useremail
  //   this.userId = result.rows[0].userid
  //   console.log(result)
  // })
  // .catch(function(error){
  //   console.log(error)
  // })
}

module.exports = User;
