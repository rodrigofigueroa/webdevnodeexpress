
exports.singupNewsLetter = ( req, res ) => {
  res.render( 'newsletter', { 
    layout: null, 
    csrf: 'CSRF Token is in here' 
  })
}

exports.signUpProcess = ( req, res ) => {
  console.log( req.query )
  console.log( 'Hidden Token ' + req.body._csrf )
  console.log( 'name :' + req.body.nameId )
  console.log( 'Email: ' + req.body.emailId )
  res.redirect( 303, '/signup-thankyou' )
}

exports.signUpThankPage = ( req, res ) => res.render( 'signup-thankyou' )