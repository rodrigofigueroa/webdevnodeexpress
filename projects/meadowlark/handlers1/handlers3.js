

exports.uploadViews = ( req, res ) => res.render( 'ch8/fetchupload', {
  csrf: 'Token is in here',
  year: '2023',
  month: 'july'
} )

exports.api = {
  uploadFetch: ( req, res, fields, files ) => {
    console.log( 'Fields data : ', fields )
    console.log( 'Files', files )
    res.json({ success: true })
  }
}