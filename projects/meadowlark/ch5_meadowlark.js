const express = require( 'express' )
const handExp = require( 'express-handlebars' )
const app     = express()
const port    = process.env.PORT || 3000
const { 
  home,
  about,
  notFound,
  fortunes,
  errorFive,
} = require( './lib/ch5_renderViews' )

app.engine( 'handlebars', handExp({
  defaultLayout: 'main'
}))

app.set( 'view engine', 'handlebars' )

app.get( '/', home )
app.get( '/about', about )
app.get( '/fortune2', fortunes )
app.use( notFound )
app.use( errorFive )


app.listen( port, console.log( `The Server is http://127.0.0.1:${ port }` ))