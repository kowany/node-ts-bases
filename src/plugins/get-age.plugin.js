const getAgePlugin = require('get-age')

const getAge = (birthdate) => {
  console.log('plugin: getAge', birthdate)
  if (!birthdate) return new Error('birthdate is required')

  return getAgePlugin(birthdate)
}

module.exports = {
  getAge
}
