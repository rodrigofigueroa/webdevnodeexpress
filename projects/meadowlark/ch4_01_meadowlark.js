const { resolve } = require( 'path' )
const express     = require( 'express' )
const app         = express()
const handleBars  = require( 'express-handlebars' )
const port        = process.env.PORT || 3000
const {f}           =  require( './lib/fortunes' )

app.engine( 'handlebars', handleBars({
  defaultLayout: 'main'
}))

app.set( 'view engine', 'handlebars' )
app.use( express.static( __dirname + '/public' ) )

app.get( '' ,( req, res ) => res.render('home') )
app.get( '/about' ,( req, res ) => res.render('about') )

app.get( '/404' ,( req, res ) => {
  res.status( 404 )
  res.render('404')
})

app.get( ( err, req, res, next ) => {
  res.status( 500 )
  res.render( '500' )
})

app.get( '/fortune2', ( req, res ) => { 
  res.render( 'fortune2', { f } ) 
})

app.listen( port, console.log( `Server is on port ${ port }` ))