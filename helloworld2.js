const http = require( 'http' )
const port = process.env.PORT || 3000 

const server = http.createServer( ( req, res ) => {
  res.writeHead( 200, {
    'Content-Type': 'text/plain'
  })
  res.end( 'HI World 2!' )
})

server.listen( port, () => console.log('World two in port 3000') )