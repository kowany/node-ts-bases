// const { emailTemplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')

// console.log(emailTemplate)
// const { getUserById } = require('./js-foundation/04-arrow')

// const { getAge, getUUID } = require('./plugins')
// const { buildMakePerson } = require('./js-foundation/05-factory')

const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js')

logger.log('Hola mundo')
logger.error('Esto es algo malo')
// const getPokemonById = require('./js-foundation/06-promises')

// getPokemonById(1)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log('Por favor intente de nuevo'))
//   .finally(() => console.log('Finalmente'))

// token de acceso
// Públicas
//!  referencia a la function factory y uso

// const makePerson = buildMakePerson({ getAge, getUUID })

// const obj = { name: 'Rosy', birthdate: '1958-11-19' }

// const rosy = makePerson(obj)

// console.log(rosy)
// const id = 2

// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error)
//   }
//   console.log(user)
// })
