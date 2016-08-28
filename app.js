var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views') )

app.get('/', function(request, response){
  response.render('index')
})

app.listen(1337, function(){
  console.log('dupa')
})
