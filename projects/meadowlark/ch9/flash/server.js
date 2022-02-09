import express                    from 'express'
import { engine }                 from 'express-handlebars'
import cookieParser               from 'cookie-parser'
import session                    from 'express-session'
import morgan                     from 'morgan'
import { credentials }            from './config'
import { flashMiddleware }        from './lib/flash'
import { home, form, newsLetter } from './lib/controllers'

const app  = express(),
      port = process.env.PORT || 1024,
      { cookieSecret } = credentials
// Security
app.disable( 'x-powered-by' )
app.engine( 'handlebars', engine({ defaultLayout: 'main' }))
app.set( 'view engine', 'handlebars' )

// Middlewares Form handling
app.use( express.urlencoded({ extended: false }))
// Cookies ands Sessions
app.use( cookieParser( cookieSecret ) )
app.use( session({
  resave: false,
  saveUninitialized: false,
  secret: cookieSecret
}))
// Request 
app.use( morgan( 'dev' ) )
app.use( flashMiddleware )

app.get( '/', home )
app.get( '/form', form )
app.post( '/newsletter', newsLetter )

app.listen( port, () => console.log( `http://127.0.0.1:${ port }`) )