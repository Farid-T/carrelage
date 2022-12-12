const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// const https = require('https')

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/calculCarrelage.html")
})

app.post("/", function (req, res) {
  const surf = req.body.surface;
  const nbreDeCarreaux = (45) * surf;
  
  res.send("Pour votre surface de" + surf + "Le nombre de carreaux nécéssaire est de" + nbreDeCarreaux + "m2")
})



app.listen(3005, function() {
  console.log('Exemple app listening on port 3000!')
})