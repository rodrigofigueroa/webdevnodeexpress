const express           = require( 'express' ),
      app               = express(),
      port              = process.env.PORT || 1024,
      handleB           = require( 'express-handlebars' ),
      weatherMiddleware = require('./lib3/weather')

app.disable( 'x-powered-by' )

app.use( express.urlencoded({ extended: true }))
app.use( express.json() )

app.use( weatherMiddleware )

app.engine( 'handlebars', handleB({
  defaulLayout: 'main'
}) )

app.set( 'view engine', 'handlebars' )

app.get( '/', ( req, res ) => res.render( 'home' ))

app.get( '/weather', ( req, res ) => res.render( 'weather' ))

app.listen( port, console.log( `http://127.0.0.1:${ port }`) )