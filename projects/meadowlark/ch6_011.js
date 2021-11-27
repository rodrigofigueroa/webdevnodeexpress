const express     = require( 'express' ),
      app         = express(),
      hand        = require( 'express-handlebars' ),
      bp          = require( 'body-parser' )
      port        = process.env.PORT || 1024,
      { resolve } = require( 'path' )

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
app.use( bp.urlencoded({ extended: false }))

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
// Listen
app.listen( port, console.log( `http://127.0.0.1:${ port }` ) )
