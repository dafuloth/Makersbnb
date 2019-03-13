const { Pool } = require('pg');
const connectionString = 'postgres://student:@localhost:5432/teamrandom_bnb';

const pool = new Pool({
  connectionString: connectionString,
});

function cleanDatabase() {
  // const truncateUsersTable = "TRUNCATE Users";
  const cleanDatabaseTables = "  TRUNCATE users CASCADE;";
  pool.query(cleanDatabaseTables, () => {
    pool.end();
  });
}

function buildUserTable() {
  const createUsersTable = "CREATE TABLE Users(UserId SERIAL PRIMARY KEY,"
                          + "UserName VARCHAR(20) not null,"
                          + "UserPassword VARCHAR(10) not null,"
                          + "UserEmail VARCHAR(40) not null)";

  pool.query(createUsersTable, () => {
    // pool.end();
  });
}

  function buildSpacesTable() {
    const createSpaceTable = "CREATE TABLE Spaces(SpaceId SERIAL PRIMARY KEY,"
                  + "OwnerId int not null,"
                  + "SpaceName VARCHAR(20) not null,"
                  + "SpaceDescription VARCHAR(50) not null,"
                  + "PricePerNight DECIMAL(12,2),"
                  + "CONSTRAINT FK_OwnerId FOREIGN KEY (OwnerId) REFERENCES Users(UserId));";

    pool.query(createSpaceTable, () => {
      // pool.end();
    });
  }

    function buildBookingsTable() {
      const createBookingTable = "CREATE TABLE Bookings (BookingId SERIAL PRIMARY KEY,"
                  + "SpaceId int not null,"
                  + "GuestId int not null,"
                  + "BookingStartDate DATE,"
                  + "BookingEndDate DATE,"
                  + "BookingPending BOOLEAN,"
                  + "BookingConfirmed BOOLEAN,"
                  + "CONSTRAINT FK_SpaceId  FOREIGN KEY (SpaceId) REFERENCES Spaces(SpaceId),"
                  + "CONSTRAINT FK_GuestId FOREIGN KEY (GuestId ) REFERENCES Users(UserId));";

        pool.query(createBookingTable, () => {
        // pool.end();
      });
    }

  function buildDatabase() {
    buildUserTable();
    buildSpacesTable();
    buildBookingsTable();
    pool.end();
  };


buildDatabase();
