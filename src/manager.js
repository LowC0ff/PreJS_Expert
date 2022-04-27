const Employee = require("./employee");
const Util = require("./util");

class Manager extends Employee {
    #bonuses = 2000
    get bonuses () {
        return Util.formatCurrency(this.#bonuses)
    }

    get netPay() {
        const finalValue = Util.unFormartCurrency(super.netPlay) + Util.unFormartCurrency(this.bonuses)
        
        return Util.formartCurrency(finalValue)
    }
}

module.exports = Manager