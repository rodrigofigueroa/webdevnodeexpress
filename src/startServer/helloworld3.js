const http = require( 'http' )
const port = process.env.PORT || 8080

const server = http.createServer( (req, res ) => {
  res.writeHead( 200, {
    'Content-Type': 'text/html'
  })
  res.end( `<h1>World 3</h1>` )
})

server.listen( port, console.log( `The server is in port ${ port } Ctrl + C to stop Enjoy`) )