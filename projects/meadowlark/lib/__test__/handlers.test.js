const handlers = require( '../ch5_renderViews' )


test('testing home renders', () =>{
const req = {},
      res = { render: jest.fn() }
  handlers.home( req, res )
  // console.log(
  //   res.render.mock
  // );
  expect( res.render.mock.calls[ 0 ][ 0 ] ).toBe( 'home' )
})

test( 'testing about page', () => {
  const req = {}, 
        res = { render: jest.fn() }
  handlers.about( req, res )
  expect( res.render.mock.calls[ 0 ][ 0 ] ).toBe( 'about' )
})

test( 'testing fortune page', () => {
  const req = {}, 
        res = { render: jest.fn() }
    handlers.fortunes( req, res )
        // console.log(
        //   res.render.mock
        // );
  expect( res.render.mock.calls[ 0 ][ 0 ] ).toBe( 'fortune2' )
  expect( res.render.mock.calls[ 0 ][ 1 ] ).toEqual( 
    expect.objectContaining({
      // f: expect.any( String )
      f: expect.stringMatching( /\w/g )
    }))
})

test( 'testing 404 page', () => {
  const req = {}, 
        res = { render: jest.fn() }
  handlers.notFound( req, res )
  expect( res.render.mock.calls[ 0 ][ 0 ] ).toBe( '404' )
})

test( 'testing 500 page', () => {
  const err   = new Error( 'Server error'),
        req   = {}, 
        res   = { render: jest.fn() },
        next  = jest.fn()
    handlers.errorFive( err, req, res, next )
    // console.log(
    //   res.render.mock.calls
    // );
  expect( res.render.mock.calls.length ).toBe( 1 )
  expect( res.render.mock.calls[ 0 ][ 0 ] ).toBe( '500' )

})

