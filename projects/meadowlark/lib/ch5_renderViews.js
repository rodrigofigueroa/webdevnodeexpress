
const fort = [
  '1','2','3','4'
]

const f = () => {
  return fort[ Math.floor( ( Math.random() * fort.length ) + 0 ) ]
}

exports.home = ( 
    req, res 
  ) => res.render( 'home' )

exports.about = ( 
    req, res 
  ) => res.render( 'about' )

exports.fortunes = ( 
    req, res 
  ) => res.render( 'fortune2', { f: f() }  )

exports.notFound = ( 
    req, res 
  ) => {
    res.status( 404 )
    res.render( '404' )
  }

exports.errorFive = ( 
  err, req, res, next 
  ) => {
    res.status( 500 )
    res.render( '500' )
  }