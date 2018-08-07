// import orm.js to get the query structure created
var orm = require("../config/orm.js");

// Create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    // grab all burgers from db
    selectAll: function(callback) {
        orm.selectAll("id", "burger", "burgers", function(res) {
            callback(res);
        });
    },
    // add a burger to db
    insertOne: function(value, callback) {
        orm.insertOne("burgers", "burger", value, function(res) {
            callback(res);
        });
    },
    // update uneaten burger to eaten/devoured
    updateOne: function(id, callback) {
        orm.updateOne("burgers", id, function(res) {
            callback(res);
        });
    }
}; // end of burger object

// Export the burger.js file as a module so the data can be sent to the frontend
module.exports = burger;