var db = require('./databaseFunctions')

function Bookings(bookingId, spaceId, guestId, bookingStartDate, bookingEndDate, bookingStatus) {
  this.bookingId = bookingId
  this.spaceId = spaceId
  this.guestId = guestId
  this.bookingStartDate = bookingStartDate
  this.bookingEndDate = bookingEndDate
  this.bookingStatus = bookingStatus
}
