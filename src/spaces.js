var db = require('./databaseFunctions')
var Space = require('./space')

function Spaces() {
  this.spaces = []
}

Spaces.prototype.getAllSpaces = async function () {

  try {
    var result = await db.getAllSpaces()
  } catch(error){
    console.log(error)
  }
    result.rows.forEach(function(value){
      this.spaces.push(new Space(
        value.spaceid,
        value.ownerid,
        value.spacename,
        value.spacedescription,
        value.pricepernight
      ))
    }, this)
    return this.spaces

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

module.exports = Spaces;
