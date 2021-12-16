const express = require( 'express' ),
      app     =  express(),
      port    = process.env.PORT || 1024,
      { resolve }    = require( 'path' )
  
console.log( resolve() + '/src/', __dirname )

app.use( express.static( __dirname + '/src/' ))

app.listen( port, console.log( `http://127.0.0.1:${ port }/` ))