const http  = require( 'http' )
const fs    = require( 'fs' )
const port  = process.env.PORT || 3000

const serverFiles = ( res, path, contentType, serverCode = 200 ) => {
  // console.log(  __dirname, path )
  fs.readFile( __dirname + path , ( err, data ) => {
    if( err ){
      res.writeHead( 500, {
        'Content-Type': 'text/plain'
      })
      return res.end( '500, There was a problem Finding your File' )
    }
    res.writeHead( serverCode, {
      'Content-Type': contentType
    })
    res.end( data )
  })
}

const server = http.createServer( ( req, res ) => {
  const path = req.url.replace( /\/?(?:\?.*)?$/, '' ).toLowerCase()
  
  switch( path ){
    case '': serverFiles( res, '/home.html', 'text/html' )
      break
    case '/about': serverFiles( res, '/about.html', 'text/html' )
      break
    case '/img/logo.jfif': serverFiles( res, '/img/logo.jfif', 'img/jfif' )
      break
    default: serverFiles( res, '/404.html', 'text/html', 404 )
      break
  }
});

server.listen( port, () => console.log( `Server started on port ${ port } Ctrl C to Close` ) )