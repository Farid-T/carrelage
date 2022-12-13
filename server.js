const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const https = require('https')

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/calculCarrelage.html")
})
app.post("/", function (req, res) { 
  const surf = req.body.surface;
  const nbreDeCarreaux = (45) * surf;
  res.send("Pour votre surface de " + surf + "m2. Le nombre de carreaux nécéssaire est de : " + nbreDeCarreaux + " unités")
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/calculCarrelage.html")
}) 

app.post("/", function (req, res) {
  const surf1 = req.body.prix;
  const prix = surf1 * (49.90)
res.send("Pour votre surface de " + surf1 + "m2. Le prix total de votre commande est de : " + prix + "€")
})



app.listen(3004, function() {
  console.log('connexion établie')
})