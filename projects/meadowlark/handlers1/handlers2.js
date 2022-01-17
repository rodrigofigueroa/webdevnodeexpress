
exports.signUpStart = ( req, res ) => {
  res.render( 'ch8/uploadview', {
    csrf: 'Token is in here',
    year: '2022',
    month: 'september'
  } )
}

exports.signUpEnd = ( req, res ) => res.render( 'thank-you' )

exports.api = {
  signUpCommon: ( req, res, fields, files ) => {
    console.log( 'Fields data ', fields )
    console.log( 'Files', files )
    res.redirect( 303, '/thank-you' )
  }
}