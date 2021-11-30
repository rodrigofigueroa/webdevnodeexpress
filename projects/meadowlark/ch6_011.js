const express     = require( 'express' ),
      app         = express(),
      hand        = require( 'express-handlebars' ),
      bp          = require( 'body-parser' )
      port        = process.env.PORT || 1024,
      { resolve } = require( 'path' ),
      multer      = require( 'multer' ),
      upload      = multer()

// Variables
const tours = [
  {
    id: 0,
    nameTour: "Trip1",
    price: "$200",
  },
  {
    id: 1,
    nameTour: "Trip2",
    price: "$300",
  },
];
// Security
app.disable( 'x-powered-by' )

// body parser
// app.use( bp.json() ) 
// app.use( bp.urlencoded() )
// app.use( bp.urlencoded({ extended: true })) 

// Engine
app.engine( 'handlebars', hand({
  defaultLayout: 'main'
}))
app.set( 'view engine', 'handlebars' )
// IMGs static with app.use( express.static( url ))
// app.use( express.static( resolve( '' ) + '/public' ))
// Get pages
app.get( '/', ( req, res ) => res.render( 'home' ) )
app.get( '/form2', ( req, res ) => res.render( 'form2' ) )

// API
app.get( '/tours/all/', ( req, res ) => {
  console.log(
    req.body,
    req.query
  )
  res.json( tours )
  // res.format({ 'application/json': res.json( tours ) })
})

app.post( '/tours/post/', ( req, res ) => {
  console.log(
    req.params,
    req.body,
    req.query
  );
  res.json( tours )
})

app.post( '/normalform', ( req, res ) => {
  console.log(req.body, req.query )
  res.json({
    success: true
  })
})
// Update PUT
const Users = [
  { id: 0, userName: 'AnnaSophia Robb', age: 27 },
  { id: 1, userName: 'Jesse Aarons', age: 27 }
]
// To use the link you need to use this method /api/user/1 
app.put( '/api/user/:id', upload.none() ,( req, res ) => {
  console.log( `req,params`, req.params, 'req.query', req.query, 'req.body', req.body )
  const find = Users.find( itm => ( 
    itm.id === parseInt( req.params.id ) 
  ) ? itm : '' )
  if( !find ) return res.status( 404 ).json({ 
    success: false, error: 'No suchas user in the database'
  })
  console.log( find )
  if( req.body.userName ) find.userName = req.body.userName
  if( req.body.age ) find.age = parseInt( req.body.age )
  console.log( find )
  res.json({ success: true })
})

// Delete

app.delete( '/api/users/:id', upload.none() ,( req, res ) => {
  console.log( req.body, req.params )
  const user = Users.findIndex( user => ( 
    user.id === parseInt( req.params.id ) ) )
  console.log( user )
  if( user > 0 ){
    Users.splice( user, 1 )
    res.json({
      success: true
    })
  }else{
    res.json({
      error: 'There arent any user with that ID',
      success: false
    })
  }
})
// Listen
app.listen( port, console.log( `http://127.0.0.1:${ port }` ) )
