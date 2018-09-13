const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/about', function (req, res) {
  res.render('about/index');
})

app.get('/peepocop', function (req, res) {
  res.render('peepocop/index');
})

app.get('/404', function (req, res) {
  res.render('404/index');
})

const port = process.env.PORT || 3000
app.listen(port, function () {
console.log("Listening on port " + port)
})

app.get('*', function (req, res) {
  res.render('404/index');
})
