const { Pool } = require('pg');
const connectionString = 'postgres://student:@localhost:5432/teamrandom_bnb';

const pool = new Pool({
  connectionString: connectionString,
});

function createDatabase() {
 const cleanDatabaseTables = " CREATE Database teamrandom_bnb;";
 pool.query(cleanDatabaseTables, () => {
 });
}
 function cleanDatabase() {
  const cleanDatabaseTables = "  TRUNCATE users CASCADE;";
  pool.query(cleanDatabaseTables, () => {
  });
}

 function buildUserTable() {
  const createUsersTable = "CREATE TABLE Users(UserId SERIAL PRIMARY KEY,"
                          + "UserName VARCHAR(20) UNIQUE not null,"
                          + "UserPassword VARCHAR(10) not null,"
                          + "UserEmail VARCHAR(40) UNIQUE not null)";

  pool.query(createUsersTable, () => {
  });
}

  function buildSpacesTable() {
    const createSpaceTable = "CREATE TABLE Spaces(SpaceId SERIAL PRIMARY KEY,"
                  + "OwnerId int not null,"
                  + "SpaceName VARCHAR(20) UNIQUE not null,"
                  + "SpaceDescription VARCHAR(200) not null,"
                  + "PricePerNight DECIMAL(12,2),"
                  + "CONSTRAINT FK_OwnerId FOREIGN KEY (OwnerId) REFERENCES Users(UserId));";

    pool.query(createSpaceTable, () => {
    });
  }

  function buildBookingsTable() {
      const createBookingTable = "CREATE TABLE Bookings (BookingId SERIAL PRIMARY KEY,"
                  +"SpaceId int not null,"
                  +"GuestId int not null,"
                  +"BookingStartDate DATE,"
                  +"BookingEndDate DATE,"
                  +"BookingPending BOOLEAN,"
                  +"BookingConfirmed BOOLEAN,"
                  +"CONSTRAINT FK_SpaceId  FOREIGN KEY (SpaceId) REFERENCES Spaces(SpaceId),"
                  +"CONSTRAINT FK_GuestId FOREIGN KEY (GuestId ) REFERENCES Users(UserId));"

        pool.query(createBookingTable, () => {
      });
    }

  async function buildDatabase() {
    await createDatabase();
    await cleanDatabase();
    await buildUserTable();
    await buildSpacesTable();
    await buildBookingsTable();
    pool.end();
  };


buildDatabase();
