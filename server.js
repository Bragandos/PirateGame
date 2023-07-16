// set up ========================
var express = require("express");
var app = express(); // create our app w/ express
var path = require("path");
var mysql = require("mysql2/promise");

bodyParser = require("body-parser");

const pool = mysql.createPool({
  database: "pirate_db",
  host: "sql647.your-server.de",
  user: "stinky_pirate",
  password: "rJWp9mJp2K7xCGK9",
  connectionLimit: 10, // Anzahl der maximalen Verbindungen im Pool
});

async function queryDatabase(sql, values) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(sql, values);
    return results;
  } finally {
    connection.release();
  }
}

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// configuration =================
app.use(express.static(path.join(__dirname, "/dist/pirategame"))); //TODO rename to your app-name

// listen (start app with node server.js) ======================================
app.listen(8080, function () {
  console.log("App listening on port 8080");
});

// application -------------------------------------------------------------
app.get("/", function (req, res) {
  //res.send("Hello World123");
  res.sendFile("index.html", { root: __dirname + "/dist/pirategame" }); //TODO rename to your app-name
});

app.get("/api/test", async function (req, res) {
  try {
    const results = await queryDatabase('SELECT * FROM `Schiffupgrades`');
    res.json(results);
  } catch (error) {
    console.error("Error querying database:", error);
    res.sendStatus(500);
  }
});
