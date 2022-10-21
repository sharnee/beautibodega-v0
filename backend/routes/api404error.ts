// api404Error.js

const httpStatusCodes1 = require('./httpStatusCodes')
const BaseError = require('./baseError')

class Api404Error extends BaseError {
 constructor (
 name: any,
 statusCode = httpStatusCodes1.NOT_FOUND,
 description = 'Not found.',
 isOperational = true
 ) {
 super(name, statusCode, isOperational, description)
 }
}

module.exports = Api404Error