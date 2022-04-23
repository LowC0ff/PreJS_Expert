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

    assert.throws(() => employee.birthYear, { message: 'you must define age first!!'})
}

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR

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
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4.000,32))

    const expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)


    //não tem set, não vai mudar!!! orientação a objetos
    employee.birthYear = newDate().getFullYear() - 80
    assert.deepStrictEqual(employee.birthYear, new Date().getFullYear() - 80)


    //deu certo porque o age tem set
    employee.age = 80
    assert.deepStrictEqual(employee.BirthYear, 1941)
}