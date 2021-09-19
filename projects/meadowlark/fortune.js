const express = require( 'express' )
const handleB = require( 'express-handlebars' )
const app     = express()
const port    = process.env.PORT || 3000

app.engine( 'handlebars', handleB({
  defaultLayout: 'main'
}))

app.set( 'view engine', 'handlebars' )

app.use( express.static( __dirname + '/public' ) )

app.get( '', ( req, res ) => res.render( 'home') )
app.get( '/about', ( req, res ) => res.render( 'about') )
// 
const fortunes = [
  'Education is the kindling of a flame Socrates',
  'Who sweats in training bleeds lees in war Spartan Credo',
  'If isnt ok dont worry is not the end of the world, it will be oke at the final, Jhonn Lennon'
]
app.get( '/fortune', ( req, res ) => {
  const fortuneNumber = Math.floor( ( ( Math.random() * fortunes.length ) + 0 ) )
  const fortune = fortunes[ fortuneNumber ]
  res.render( 'fortune', { fortune }) 
})

app.use( ( req, res ) => {
  res.status( 404 )
  res.render( '404' )
})

app.use( ( err, req, res, next ) => {
  res.status( 500 )
  res.render( '500' )
})

app.listen( port, console.log( `Server is on` ) )