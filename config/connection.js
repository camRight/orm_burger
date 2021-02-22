const mysql = require("mysql");
const util = require("util");

const { allowedNodeEnvironmentFlags } = require("process");
const { connect } = require("http2");

// const pool = mysql.createPool({
    // connectionLimit: 10,
    // connection: 'keep-alive',
    // host: 'localhost',

const connection = mysql.createPool({
    host: 'localhost',
    port: 8008,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

const query = util.promisify(connection.query).bind(connection);

connection.connect(function (error) {
    if (error) {
        throw error
    }
    console.log("connection ID", connection.threadId)
});

module.exports = connection;