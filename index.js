/* eslint-disable object-shorthand */
const { Pool } = require('pg');

const connectionString = 'postgres://student:@localhost:5432/teamRandom_bnb';

const pool = new Pool({
  connectionString: connectionString,
});

const createUsersTable = "CREATE TABLE Users(UserId SERIAL PRIMARY KEY,"
              + "UserName VARCHAR(20) not null,"
              + "UserPassword VARCHAR(10) not null,"
              + "UserEmail VARCHAR(40) not null)";

const createSpaceTable = "CREATE TABLE Spaces(SpaceId SERIAL PRIMARY KEY,"
              + "OwnerId int not null,"
              + "SpaceName VARCHAR(20) not null,"
              + "SpaceDescription VARCHAR(50) not null,"
              + "PricePerNight DECIMAL(12,2),"
              + "OwnerId int FOREIGN KEY REFERENCES Users(UserId)";

const createBookingTable = "CREATE TABLE Bookings (BookingId SERIAL PRIMARY KEY,"
              + "SpaceId int not null,"
              + "GuestId int not null,"
              + "BookingStartDate DATE,"
              + "BookingEndDate DATE,"
              + "BookingPending BOOLEAN,"
              + "BookingConfirmed BOOLEAN,"
              + "CONSTRAINT FK_SpaceId  FOREIGN KEY (SpaceId) REFERENCES Spaces(SpaceId),"
              + "CONSTRAINT FK_GuestId FOREIGN KEY (GuestId ) REFERENCES Users(UserId));";

pool.query(createUsersTable, () => {
  pool.end();
});

pool.query(createSpaceTable, () => {
  pool.end();
});

pool.query(createBookingTable, () => {
  pool.end();
});
