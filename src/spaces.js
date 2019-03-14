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
}

module.exports = Spaces;
