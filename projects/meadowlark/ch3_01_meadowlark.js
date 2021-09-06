const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 3000

app.get( '/', ( req, res ) => {
  res.type( 'text/plain' )
  res.send( 'Meadowlark Website' )
})

app.get( '/about', ( req, res ) => {
  res.type( 'text/plain ')
  res.send( 'About Meadowlark' )
})

app.use( ( req, res ) => {
  res.type( 'text/plain' )
  res.status( 404 )
  res.send( '404 not found' )
})

app.listen( port, () => console.log(
  `Express Server is on Port ${ port } Ctrl + C to Stop`
))