const express = require( 'express' ),
      app     = express(),
      hand    = require( 'express-handlebars' ),
      port    = process.env.PORT || 3000,
      multer  = require( 'multer' ),
      upload  = multer()

// Request JSON
app.use( express.json() )
app.use( express.urlencoded({ extended: true }))
//  Security
app.disable( 'x-powered-by' )
// Adding engine handlebars
app.engine( 'handlebars', hand({
  defaultLayout: 'main'
}))
app.set( 'view engine', 'handlebars' )
// Request Pages
app.get( '/', ( req, res ) => res.render( 'home' ) )
app.get( '/form', ( req, res ) => res.render( 'form' ) )
app.get( '/thank-you', ( req, res ) => res.status( 303 ).render( 'thank-you') )
// Reques Post
app.post( '/form_data', upload.none() ,( req, res ) => {
  console.log( req.body, req.xhr )
  res.redirect( 303, 'thank-you' )
})

app.post( '/form_data_robust', upload.none() ,( req, res ) => {
  try{
    if( req.body.simulateError ){
      throw new Error( 'Error' )
    }
    console.log(
     `Contact: ${ req.body.name } email: ${ req.body.email }` 
    )
    res.format({
      'text/html': () => res.redirect( 303, 'thank-you' ),
      'application/json': () => res.json({
        success: true
      })
    })
  }catch( err ){
    console.log( `Error processing this ${ req.body.name } ${ req.body.email }` );
    res.format({
      'text/html': () => res.redirect( 303, 'contact-error' ),
      'application/json': () => res.status( 500 ).json({
        error: 'Error saving Content'
      })
    })
  }
})
// Error and Not Found
app.use( ( req, res ) => res.status( 404 ).render( '404' ) )

app.use( ( err, req, res, next ) => req.status( 500 ).render( '500' ) )

// Listen

app.listen( port, console.log( `http://127.0.0.1:${ port }`))