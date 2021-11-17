const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 1024

app.get( '/', ( req, res ) => {
  res.type( 'text/plain' )
  res.send( 'Thanks for reading' )
})
app.get( '/params', ( req, res ) => {
  console.log( req.params )
  res.send( `Params` )
})

app.get( '/querystrings', ( req, res ) => {
  console.log( req.query )
  res.send( 'QueryStrings' )
})

app.get( '/body', ( req, res ) => {
  console.log(
    req.body
  );
  res.send( 'Body' )
})
app.get( '/route', ( req, res ) => {
  console.log( req.route )
  res.send( 'Route' )
}) 

app.get( '/cookies', ( req, res) => {
  console.log( req.cookies )
  res.send( 'Cookies' )
})

app.get( '/headers', ( req, res) => {
  res.type( 'text/plain' )
  const headers = Object.entries( req.headers )
    res.send(
      headers.map( itm => `${ itm[ 0 ] }: ${ itm[ 1 ] }` )
   )
})

app.get( '/accepts', ( req, res ) => {
  console.log(
    req.accepts
  );
  res.send( 'Accepts' )
})
app.get( '/ip', ( req, res) => {
  const ip = req.ip
  console.log( req.ip )
  res.send( `Your IP address is : ${ ip }` )
})

app.get( '/path', ( req, res ) => {
  console.log(req.path)
  res.send(  `your path is : ${ req.path }`)
})
app.get( '/hostname', ( req, res ) => {
  console.log( req.hostname)
  res.send( `Your hostname is : ${req.hostname }` )
})

app.get( '/xhr', ( req, res ) => {
  console.log( req.xhr )
  res.send( `Are you using XHR? : ${ req.xhr }` )
})

app.get( '/protocol', ( req, res ) => {
  console.log( req.protocol )
  res.send( `your protocol is: ${ req.protocol }` )
})

app.get( '/secure', ( req, res ) => {
  console.log( req.secure )
  res.send( `Is this secure? ${ req.secure }` )
})

app.get( '/url', ( req, res ) => {
  console.log( req.url )
  res.send( ` this is your url ${ req.url }` )
})

app.listen( port, console.log( `http://127.0.0.1:${ port }` ) )