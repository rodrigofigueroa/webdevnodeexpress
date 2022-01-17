
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

exports.api = {
  signUpStart: ( req, res ) => {
    res.render( 'ch8/fetch', {
      csrf: 'Toke is in here',
      layout: null
    })
  },
  signUpPost: ( req, res ) => {
    console.log( req.query )
    console.log( req.body._csrf )
    console.log( req.body.nameId )
    console.log( req.body.emailId )
    res.json({ success: true })
  }
}

exports.signUpThankPage = ( req, res ) => res.render( 'signup-thankyou' )