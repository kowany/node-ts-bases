// const { getAge, getUUID } = require('../plugins')

const buildMakePerson = ({ getAge, getUUID }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate)
    }
  }
}

// const obj = { name: 'Rosy', birthdate: '1958-11-19' }

// const john = buildPerson(obj)

// console.log(john)

module.exports = {
  buildMakePerson
}
