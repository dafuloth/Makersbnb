var db = require('./databaseFunctions')

function Space(spaceId, spaceOwnerId, spaceName, spaceDescription, pricePerNight) {
  this.spaceId = spaceId
  this.spaceOwnerId = spaceOwnerId
  this.spaceName = spaceName
  this.spaceDescription = spaceDescription
  this.pricePerNight = pricePerNight
}

Space.prototype.getAllSpaces = async function () {

  try {
    var result = await db.getAllSpaces()
    console.log(result);
  } catch(error){
    console.log(error)
  }
  console.log('2',result.rows[0]);

    this.spaceId = result.rows[0].spaceid
    this.spaceOwnerId = result.rows[0].spaceownerid
    this.spaceName = result.rows[0].spacename
    this.spaceDescription = result.rows[0].spacedescription
    this.pricePerNight = result.rows[0].pricepernight
    console.log(this.spaceId);
    return this

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

module.exports = Space;
