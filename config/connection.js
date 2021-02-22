const mysql = require("mysql");


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});



connection.connect(function (error) {
    if (error) {
        throw error
    }
    console.log("connection ID", connection.threadId)
});

module.exports = connection;