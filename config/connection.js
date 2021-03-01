const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rmhvnb859kt53s0m",
    password: "ilcseuznxvxlm8te",
    database: "ksexsn9j8pte2082",
});



connection.connect(function (error) {
    if (error) {
        throw error
    }
    console.log("connection ID", connection.threadId)
});

module.exports = connection;