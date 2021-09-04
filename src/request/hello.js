const http = require( 'http' )
const port = process.env.PORT | 3000

const server = http.createServer( ( req, res ) => {
  const path = req.url.replace( /\/?(?:\?.*)?$/, '' )
  switch( path ){
    case '':
      res.writeHead( 200, {
        'Content-Type': 'text/plain'
      })
      res.end( 'Home' )
      break;
    case '/about':
      res.writeHead( 200, {
        'Content-Type': 'text/plain'
      })
      res.end( 'About' )
      break;
    default:
      res.writeHead( 200, {
        'Content-Type': 'text/plain'
      })
      res.end( 'Not Found 404' )
    break
  }
})

server.listen( port, () => console.log( `the server is on Port ${ port } Ctrl + C to Stop`) )