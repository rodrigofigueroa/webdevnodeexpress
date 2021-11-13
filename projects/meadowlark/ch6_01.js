const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 1024

app.get( '/', ( req, res ) => {
  res.type( 'text/plain' )
  res.send( `<h2>Hi</h2>`)
})
// disable information about the server
app.disable( 'x-powered-by' )

app.listen( port, console.log(` http://127.0.0.1:${ port }`))