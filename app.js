var express = require('express');

var app = express();

app.get('/', function(request, response){
  response.render('./views/index.ejs')
})

app.listen(1337, function(){
  console.log('dupa')
})
