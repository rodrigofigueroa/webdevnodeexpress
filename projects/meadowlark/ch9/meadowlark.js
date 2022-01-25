const express = require("express"),
  app = express(),
  port = process.env.PORT || 1024,
  cookieParser = require("cookie-parser"),
  // credentials = require("./../.credencials.development")
  { credentials } = require("../config")

console.log(credentials)

app.use(cookieParser(credentials.cookieSecret))

app.get("/", (req, res) => {
  const monster = req.cookies.monster
  console.log(monster)
  res.cookie("monster", "chom chom").send("HI")
})
app.get("/second", (req, res) => {
  const signed_cookie = req.signedCookies.monster_cookie
  console.log(signed_cookie)
  res
    .cookie("monster_cookie", "YUmmy Yummy", { signed: true })
    .send("COOOKIEES!!")
})
app.get("/clearallcookies", (req, res) => {
  res.clearCookie("monster_cookie").clearCookie("monster").send("Cleared")
})
app.listen(port, () => console.log(`http://127.0.0.1:${port}`))
