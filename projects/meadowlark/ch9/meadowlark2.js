import express          from "express"
import { credentials }  from "./../config"
import cookieParser     from "cookie-parser"
import session          from 'express-session'

const app   = express(),
      port  = process.env.PORT || 1024,
      { 
        cookieSecret 
      }     = credentials

console.log( credentials )

app.use( cookieParser( cookieSecret ))
app.use( session({
  resave: false,
  saveUninitialized: false,
  secret: cookieSecret
}))

app.get( "/", ( req, res ) => {
  req.session.userName = 'Anonymous'
  const colorScheme = req.session.colorScheme || 'dark'

  console.log( colorScheme )
  // console.log( req )
  console.log( req.session )
  res.send("Cookies")
})

app.get( '/delete_session', ( req, res ) => {
  req.session.userName = null
  delete req.session.colorScheme
  console.log( req.session )
  res.send( 'Deleted' )
})

app.listen( port, () => console.log( `http://127.0.0.1:${ port }` ))