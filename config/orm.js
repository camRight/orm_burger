const connection = require("./connection");

// orm are crud functions
// custom crud functions unlike sequelize

const util = require("util");
const query = util.promisify(connection.query).bind(connection);

const orm = {
    selectAll: async function (tableName, cbModel) {
        const burgerData = await query(`SELECT * FROM ${tableName}`)
        cbModel(burgerData);
    },
    // references orm.insertOn(.... order matters for the different variable representations with parameters)
    insertOne: async function (tableName, burgerObject, cbModel) {
        const appendBurger = await query(`INSERT INTO ${tableName} SET ?`,
            burgerObject
        )
        cbModel(appendBurger);
    },
    updateOne: async function (tableName, conditionObject, updateObject, cbModel) {
        const burgerData = await query(`UPDATE ${tableName} SET ? WHERE ? `, [updateObject, conditionObject])
        cbModel(burgerData);
    }
}


module.exports = orm;