const { Pool } = require('pg');

const connectionString = 'postgres://student:@localhost:5432/teamRandom_bnb';

const pool = new Pool({
  connectionString: connectionString,
})

const createUsersTable = "CREATE TABLE Users(UserId SERIAL PRIMARY KEY," +
              "UserName VARCHAR(20) not null," +
              "UserPassword VARCHAR(10) not null," +
              "UserEmail VARCHAR(40) not null)";

const createSpaceTable = "CREATE TABLE Spaces(SpaceId SERIAL PRIMARY KEY," +
              "OwnerId int not null," +
              "SpaceName VARCHAR(20) not null," +
              "SpaceDescription VARCHAR(50) not null," +
              "PricePerNight DECIMAL(12,2)," +
              "OwnerId int FOREIGN KEY REFERENCES Users(UserId)")";


pool.query(createUsersTable, () => {
  pool.end()
})
