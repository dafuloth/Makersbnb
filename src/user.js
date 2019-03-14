var db = require('./databaseFunctions')
function User() {

}

User.prototype.login = async function (username, password ) {
  this.username = username
  this.userPassword = password
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
}

module.exports = User;
