const assert = require('assert')
const Employee = require('./employee')
const Util = require('./util')

const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({
        name: 'teste da silva',
        genbder: GENDER.female
    })

    assert.throws(() => employee.birtYear, { message: 'you must define age first!!'})
}

{
    const employee = new Employee({
        name: 'Testezinho',
        age: 20,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Testezinho")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay, 0)
}