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

Spaces.prototype.requestSpace = function(spaceID) {
  console.log(this.spaces.filter(isSpaceID))

}

isSpaceID = function(space){
  if(space.spaceID == spaceID){
    return space
  }
}
module.exports = Spaces;
