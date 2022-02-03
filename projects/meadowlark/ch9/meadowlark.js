const express = require("express"),
    session = require( 'express-session' ),
  app = express(),
  port = process.env.PORT || 1024,
  cookieParser = require("cookie-parser"),
  // credentials = require("./../.credencials.development")
  { credentials } = require("../config"),
  { cookieSecret } = credentials

app.use( cookieParser( cookieSecret ) )

app.use( session({
  resave: false,
  saveUninitialized: false,
  secret: cookieSecret
}))

app.get( "/", ( req, res ) => {
  const monster = req.cookies.monster
  
  req.session.userName = 'Anonymous'
  const colorSchema = req.session.colorSchema || 'dark'

  console.log( colorSchema, req.session )
  console.log( monster )

  res.cookie( "monster", "chom chom" ).send( "HI" )
})

app.get( "/second", ( req, res ) => {
  const signed_cookie = req.signedCookies.monster_cookie
  const cookie = req.cookies.monster

  console.log( req.signedCookies, req.cookies )
  res
    .cookie( "monster_cookie", "YUmmy Yummy", { signed: true })
    .send( "COOOKIEES!!" )
})

app.get( "/clearallcookies", ( req, res ) => {
  const signed_cookie = req.signedCookies.monster_cookie
  const cookie = req.cookies.monster

  console.log( signed_cookie, cookie )
  req.session.userName = null
  delete req.session.colorSchema 

  console.log(req.session )

  res.clearCookie( "monster_cookie" ).clearCookie( "monster" ).send( "Cleared" )
})
app.listen( port, () => console.log( `http://127.0.0.1:${ port }` ))
