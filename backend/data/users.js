// const bcrypt = require('bcryptjs')
import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('q12345', 10),
    isAdmin: true
  },
  {
    name: 'Test1',
    email: 'test1@example.com',
    password: bcrypt.hashSync('q12345', 10),
    isAdmin: true
  },
  {
    name: 'Test2',
    email: 'test2@example.com',
    password: bcrypt.hashSync('q12345', 10),
    isAdmin: true
  },
]

// module.exports = users
export default users