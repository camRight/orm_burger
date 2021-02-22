const connection = require("./connection");

// orm are crud functions
// custom crud functions unlike sequelize

const util = require("util");
const query = util.promisify(connection.query).bind(connection);
// const router = require("express").router
const orm = {
    selectAll: async function (tableName, cbModel ) {
        const burgerData = await query(`SELECT * FROM ${tableName}`)
        cbModel(burgerData);
    }
}


module.exports = orm;