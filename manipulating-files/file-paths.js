const path = require('path')
const users = './data/users.txt'

console.log(path.dirname(users)) // parent folder
console.log(path.basename(users)) // full filename
console.log(path.extname(users))
console.log(path.basename(users, path.extname(users))) // filename

// Joining Paths

const fileName = 'users.txt'
const usersPath = path.join('\\', 'data', fileName)
const relativeUserPath = path.resolve('data/users.txt') // relative path
// const absoluteUserPath = path.resolve('/data', 'users.txt') // absolute path (first param slash)
const normalizedPath = path.normalize('/users/joe/..//test.txt'); // '/users/test.txt'
