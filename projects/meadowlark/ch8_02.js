const express     = require( 'express' ),
      app         = express(),
      port        = process.env.PORT || 1024,
      hand        = require( 'express-handlebars' ),
      {
        signUpStart,
        signUpEnd,
        api
      }           = require( './handlers1/handlers2' ),
      multiparty  = require( 'multiparty' )

app.disable('x-powered-by')

app.use( express.urlencoded({ extended: false }))
app.use( express.json() )

app.engine( 'handlebars', hand({
  defaultLayout: 'upload'
}))
app.set( 'view engine', 'handlebars' )

app.get( '', signUpStart )
app.get( '/thank-you', signUpEnd )

app.post( '/contest/image/:year/:time', ( req, res ) => {
  const form = new multiparty.Form()
  
  form.parse( req, ( err, fields, files ) => {
    if( err ) return res.status( 500 ).send({ error: err.message })
    api.signUpCommon( req, res, fields, files ) 
  })
})

app.listen( port, console.log( `http:127.0.0.1:${ port }` ) )