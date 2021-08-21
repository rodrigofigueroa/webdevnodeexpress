
const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer( (req, res) => {
  res.writeHead( 200, {
    'Content-Type': 'text/plain'
  })
  res.end( 'Hello World ')
})

server.listen( port, () => console.log(`Server Started on PORT: ${ port } Press Ctrl + C to terminate Process`) )
// console.log( http )