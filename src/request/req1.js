const http = require( 'http' )
const port = process.env.PORT | 3000

const server =  http.createServer( ( req, res ) => {

  const path = req.url.replace( /\/?(?:\?.*)?$/, '' ).toLowerCase()
  
  switch( path ){
    case '': 
    res.writeHead( 200, {
      'Content-Type': 'text/plain'
    })
    res.end( 'Home' )
    break
    case '/about':{
      res.writeHead( 200, {
        'Content-Type': 'text/plain'
      })
    }
    res.end( 'About' )
    break
    default: {
        res.writeHead( 404, {
          'Content-Type': 'text/plain'
        })
        res.end( '404 not Found :(' )
    }
    break
  }
})

server.listen( port, () => console.log( `Server is on PORT ${ port } Ctrl + C to STOP ` ) )