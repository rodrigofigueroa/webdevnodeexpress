const express       = require( 'express' ),
      app           = express(),
      port          = process.env.PORT | 1024,
      handle        = require( 'express-handlebars' ),
      { randomName }  = require( './lib2/libs' )

      console.log( randomName() )

app.engine( 'handlebars', handle({
  defaultLayout: 'main'
}))

app.set( 'view engine', 'handlebars' )

app.get( '/', ( req, res ) => res.render( 'home' ) )

app.get( '/pass', ( req, res ) => res.render( 'passhtml', { 
  nameUser: randomName(), 
  pUpper: `<h1>This is upper</h1>` ,
  layout: 'test1',
  currency: {
    places: [
      { place: 'Orlando', price: 34 }, 
      { place:'Canadá', price: 53 }, 
      { place:'USA', price: 30 }, 
      { place: 'New Zeland', price: 60 }
    ]
  }
} ))

app.use( ( req, res ) => res.status( 404 ).render('404'))

app.use( ( err, req, res, next ) => res.status( 500 ).render( '500' ) )

app.listen( port, console.log( `http://127.0.0.1:${ port }` ))