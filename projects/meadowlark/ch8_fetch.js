const express = require( 'express' ),
      app     = express(),
      port    = process.env.PORT || 1024,
      hand    = require( 'express-handlebars' ),
      {
        signUpThankPage,
        api
      }       = require( './handlers1/handlers' )

  app.disable( 'x-powered-by' )
  
  app.use( express.urlencoded({ extended: false }))
  app.use( express.json() )

  app.engine( 'handlebars', hand({
    defaulLayout: 'main'
  }))
  app.set( 'view engine', 'handlebars' )

  app.get( '/', api.signUpStart )

  app.post( '/newsletter-signup/process', api.signUpPost )
  
  app.get( '/signup-thankyou', signUpThankPage )
  

  app.use( ( req, res ) => res.status( 400 ).render( '400' ))
  app.use( (err, req, res, next ) => res.status( 500 ).render( '500' ))

  app.listen( port, console.log( `http://127.0.0.1:${ port }` ) )

      