const orm = require("../config/orm")
const burger = {
    selectAll: function (cbController) {
        orm.selectAll("burgers", function (burgerData) {
            cbController(burgerData)
        });
    },
    insertOne: function (burgerObject,  cbController) {
        orm.insertOne("burgers", burgerObject, function (appendBurger) {
            
            cbController(appendBurger)
        });
    }, updateOne:function(conditionObject, updateObject, cbController) {
        orm.updateOne("burgers", conditionObject, updateObject, function(burgerData) {
            cbController(burgerData)
        })
    }
};


module.exports = burger;