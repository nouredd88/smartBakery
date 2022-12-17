//* Here we connect the Postgre SQL Database

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "amraouin",
  password: "1234",
  host: "localhost",
  database: "myBakery",
  port: 5432,
});
module.exports = pool;

