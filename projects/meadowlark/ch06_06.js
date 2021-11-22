const express = require( 'express' ),
      hand    = require( 'express-handlebars' ),
      app     = express(),
      port    = process.env.PORT || 3000

app.engine( 'handlebars', hand({
  defaultView: 'main'
}))
app.set( 'view engine', 'handlebars' )

app.get( '/', ( req, res ) => {
  res.render( 'home' )
})

app.get( '/custom', ( req, res ) => {
  res.render( 'custom', { layout: 'custom-layout' })
})
// app.get( '/signup', ( req, res ) => {
//  app.render( 'signup', {
//    message: 'Hello You are signup',
//    style: req.query.style,
//    userid: req.cookies.userid,
//    username: req.session.username
//  }) 
// })
app.use( ( req, res ) => res.status( 404 ).render( '404' ) )

app.use( ( req, res) => {
  res.status( 500 ).render( '500' )
})

app.listen( port, console.log(` http://127.0.0.1:${ port }`))