const mysql = require("mysql")
const dbConfig = require("../db.config.js")

var conn = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

conn.connect((err) => {
  if (err) throw err

  console.log("Connection established!");
  console.log("Connected as id " + conn.threadId);
});


module.exports = conn