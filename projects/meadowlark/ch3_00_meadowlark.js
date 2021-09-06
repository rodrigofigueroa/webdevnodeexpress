const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 3000


app.use( ( req, res ) => {
  res.type( 'text/plain' )
  res.status( 404 )
  res.send( '404 not Found :c' )
})

app.use( ( err, req, res, next) => {
  res.type( 'text/plain' )
  res.status( 500 )
  res.send( '500 Server Error' )
})

app.listen( port, () => console.log( 
    `Express Server is on PORT: ${ port } Ctrl + C to Stop` 
  ) )