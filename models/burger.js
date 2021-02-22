const orm = require("../config/orm")
const burger = {
    selectAll: function (cbController) {
        orm.selectAll("burgers", function (burgerData) {
                cbController(burgerData)
        })
    }
}


module.exports = burger;