// Import (require) connection.js
var connection = require("../config/connection.js");

/* Create the methods that will execute the necessary 
   MySQL commands in the controllers. These are the methods 
   you will need to use in order to retrieve and store data 
   in your database. */
var orm = {
    selectAll: function(col1, col2, table, callback) {
        var queryString = "SELECT " + col1 + ", " + col2 + " FROM " + table + ";";
        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(table, column, value, callback) {
        var queryString = "INSERT INTO " + table + " (" + column +
        ")" + " VALUES(" + value + ");";
        console.log(queryString);

        connection.query(queryString, value, function(err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },
    updateOne: function(table, id, callback) {
        var queryString = "UPDATE " + table + " SET devoured = true WHERE id = " + id;
        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    }
}; // end of orm object

// Export the ORM object in module.exports to be used by burger.js in models folder
module.exports = orm;
