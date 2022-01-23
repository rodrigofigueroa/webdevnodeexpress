
const env = process.env.NODE_ENV || 'development'
const credencials = require( `./.credencials.${ env }` )

exports.module = { credencials }