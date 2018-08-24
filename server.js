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

app.get('/404', function (req, res) {
  res.render('404/index');
})


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})

app.get('*', function (req, res) {
  res.render('404/index');
})
