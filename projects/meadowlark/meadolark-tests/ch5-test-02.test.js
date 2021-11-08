// const puppeteer   = require( 'puppeteer' )
// const portfinder  = require( 'portfidner' )
// const app         = require( './../ch5_02_meadowlark' )

// let port = null,
//     serv = null

// beforeEach( async () => {
//   port    = await portfinder.getPortPromise()
//   serv    = app.listen( port )
// })

// afterEach( () => {
//   serv.close()
// })

// test( 'testing click button and about page', async () => {
//   const browser = await puppeteer.launch()
//   const page    = await browser.newPage(),
//   ; await page.goto(`http://localhost:${ port }`)
//   ; await Promise.all([
//     page.waitForNavigation(),
//     page.click( '[ data-test="about" ]' )
//   ])
//   expect( page.url() ).toBe( `http://127.0.0.1:${ port }/about`)
//   ; await browser.close()
// })


const puppeteer   = require( 'puppeteer' )
const portfinder  = require( 'portfinder' )
const app         = require( '../ch5_02_meadowlark' )
let servidor  = null,
    port      = null

;beforeEach( async () => {
  port = await portfinder.getPortPromise()
  servidor = app.listen( port )
})

afterEach( () => {
  servidor.close()
})

test( 'testing click and url about correctely', async () => {
  const browser = await puppeteer.launch()
  const page    = await browser.newPage()
  ; await page.goto( `http://127.0.0.1:${ port }` )
  ; await Promise.all([
    page.waitForNavigation(),
    page.click( '[ data-test="about" ]' )
  ])
  ;expect( page.url() ).toBe( `http://127.0.0.1:${ port }/about` )
  ; await browser.close()
})