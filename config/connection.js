const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    username: "rmhvnb859kt53s0m",
    password: "ilcseuznxvxlm8te",
    port: 3306,
    database: "ksexsn9j8pte2082",
});



connection.connect(function (error) {
    if (error) {
        throw error
    }
    console.log("connection ID", connection.threadId)
});

module.exports = connection;