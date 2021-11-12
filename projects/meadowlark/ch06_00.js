const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 1024



app.get( '/headers', ( req, res ) => {
  res.type( 'text/plain' )
  const he = Object.entries( req.headers )
  .map( itm => `${ itm[ 0 ] }: ${ itm[ 1 ] }` )
  res.send( he )
})

app.listen( port, console.log( `http://127.0.0.1:${ port }` ))