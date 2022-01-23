const express     = require( 'express' ),
      app         = express(),
      port        = process.env.PORT || 1024,
      hand        = require( 'express-handlebars' ),
      multiparty  = require( 'multiparty' ),
      {
        uploadViews,
        api
      } = require( './handlers1/handlers3' ),
      credencials = require('./config')
console.log( credencials )
app.disable( 'x-powered-by' )
app.use( express.urlencoded({ extended: false }))
app.use( express.json() )

app.engine( 'handlebars', hand({
  defaultLayout: 'upload'
}) )
app.set( 'view engine', 'handlebars' )

// Views

app.get( '', uploadViews )

app.post( '/fetchupload/:year/:month', ( req, res ) => {
  const form = new multiparty.Form()
  form.parse( req, ( err, fields, files ) => {
    if( err ) return new Error( err.message )
    api.uploadFetch( req, res, fields, files )
  })
})

app.use( ( req, res ) => res.status( 404 ).render( '400' ))
app.use( ( err, req, res, next ) => res.status( 500 ).render( '500' ))

app.listen( port, console.log( `http://127.0.0.1:${ port }` ))