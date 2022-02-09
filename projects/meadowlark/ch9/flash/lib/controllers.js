import { VALID_EMAIL_REG }        from './lib/Regex'

exports.home = ( req,res ) => {
  req.session.userName = 'Anonymous'
  const scheme = req.session.colorScheme || 'dark'
  res
  .cookie( 'first_cookie', 'Yummmi', { signed: true } )
  .render( 'home' )
}

exports.form =  ( req, res ) => res.render( 'form' )

exports.newsLetter = ( req, res ) => {
  console.log( req.body  )
  const { userName, userEmail } = req.body

  if( userName === '' && !VALID_EMAIL_REG.test( userEmail ) ){
    req.session.flash = {
      type: 'danger',
      intro: 'validation',
      message: 'The email address you entered was not valid'
    }
    res.redirect( 303, '/form' )
  }

  req.session.flash = {
    type: 'danger',
    intro: 'validation',
    message: 'The email address you entered is great'
  }
  res.redirect( 303, '/form' )

}