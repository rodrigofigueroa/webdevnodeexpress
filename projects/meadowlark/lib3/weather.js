

const getWeatherData = () => Promise.resolve([
  {
    location: {
      temp: 2
    }
  },
  {
    location: {
      temp: 223
    }
  },
  {
    location: {
      temp: 434
    }
  }
])

const weatherMiddleware = async ( req, res, next ) => {
  
  if( !res.locals.partials ) res.locals.partials = {}

  res.locals.partials.weatherContext = await getWeatherData()

  next()
}

module.exports = weatherMiddleware