const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 1024
app.disable( 'x-powered-by' )
app.get( '/', ( req, res ) => {
res.type( 'text/plain' )
res.send( 'Thanks for reading' )})

app.get( '/status', ( req, res ) => {
  res.status( 404 )
  res.send( 'Status' )
})
app.get( '/set', ( req, res ) => {
  res.set( {medium: 'Hi thank you for reading'})
  res.send( 'set' )
})

app.get( '/cookie', ( req, res) => {
  res.cookie( 'cook', 'first', [])
  res.send( 'Cookie' )
})

app.get( '/clearingcookie', ( req, res) => {
  res.cookie( 'cook', 'first', [])
  res.clearCookie( 'cook' )
  res.send( 'Cookie' )
})

app.get( '/redirect', ( req, res ) => {
  res.redirect( 301, '/' )
})

app.get( '/json', ( req, res ) => {
  res.json({
    page: 'Medium',
    comment: 'Thanks for Reading',
    emoji: '😃'
  })
})

app.get( '/end', ( req, res ) => {
  res.end()
})

// app.get( '/format', ( req, res ) => {
//   res.format( { 'text/plain': 'hi', 'text/html': '<h2>Hi</h2>'} )
// })

app.get( '/attachment', ( req, res ) => {
  res.attachment( '/data.txt')
})

app.get( '/download', ( req, res ) => {
  res.download( '/', 'data.txt', function(){console.log('downloaded')} )
  res.send('downloads')
})

app.get( '/links', ( req, res ) => {
  console.log(
    res.links( { link: '/medium.com'} )
  );
  res.send( 'links' )
})

// app.get( '/locals', ( req, res ) => {
//   res.render( '404' )
// })

app.listen( port, console.log( `http://127.0.0.1:${ port }` ) )

