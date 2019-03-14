/* eslint-disable func-names */
/* eslint-disable no-var */
/* eslint-disable prefer-arrow-callback */
var db = require('./databaseFunctions');
var Space = require('./space');

function Spaces() {
  this.spaces = [];
}

Spaces.prototype.getAllSpaces = async function () {
  try {
    var result = await db.getAllSpaces();
  } catch (error) {
    console.log(error);
  }
  result.rows.forEach(function (value) {
    this.spaces.push(new Space(
      value.spaceid,
      value.ownerid,
      value.spacename,
      value.spacedescription,
      value.pricepernight,
    ));
  }, this);
  return this.spaces;
};

Spaces.prototype.requestSpace = function (spaceID) {
  var matchingSpaces = this.spaces.find(function (space) {
    return space.spaceID === spaceID;
  });
  return matchingSpaces;
};

module.exports = Spaces;
