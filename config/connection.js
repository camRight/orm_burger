const mysql = require("mysql");


const connection = mysql.createConnection({
    Host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    Username: "rmhvnb859kt53s0m",
    Password: "ilcseuznxvxlm8te",
    Port: 3306,
    Database: "ksexsn9j8pte2082",
});



connection.connect(function (error) {
    if (error) {
        throw error
    }
    console.log("connection ID", connection.threadId)
});

module.exports = connection;