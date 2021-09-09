const express = require( 'express' )
const handleB = require( 'express-handlebars' )
const app     = express()
const port    = process.env.PORT || 3333

app.engine( 'handlebars', handleB({
  defaultLayout: 'main'
}))

app.set( 'view engine', 'handlebars' )

app.get( '', ( req, res ) => res.render( 'home' ) )
app.get( '/about', ( req, res ) => res.render( 'about' ) )

app.use( ( req, res ) => {
  res.status( 404 )
  res.render( '404' )
})

app.use( (err, req, res, next) => {
  console.log( err )
  res.status( 500 )
  res.render( '500' )
})

app.listen( port, console.log( `Server is on Port ${ port } Ctrl + C to Stop` ))