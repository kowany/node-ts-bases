// console.log(process.env)

const { SHELL, USERDOMAIN, WINDIR } = process.env

// console.table({ SHELL, USERDOMAIN, WINDIR })

const characters = ['Flash', 'Superman', 'Robin', 'Batman']

// const [_, __, Batman] = characters
const [, , , batman] = characters

// console.log(batman)
