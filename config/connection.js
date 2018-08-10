// Set up connection to MySQL
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {    
    connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Avery0504",
    database: "burger_db"
    });
};
    
// Establish connection to database
connection.connect(function(err) {
    if (err) {
        console.error("error connecting:  " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// EXPORT connection variable above as a module for other files to use
module.exports = connection;