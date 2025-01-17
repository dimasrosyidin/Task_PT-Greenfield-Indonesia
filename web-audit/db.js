const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost", 
  user: "root",      // Username database
  password: "",      // Password database
  database: "taskgreenfield", // Nama database 
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

module.exports = db;
