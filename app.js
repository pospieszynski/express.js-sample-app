var express = require('express');

var app = express();

app.get('/', function(request, response){
  console.log("REQUEST OBJECT: " + REQUEST);
  response.send("hello world");
})

app.listen(1337, function(){
  console.log('dupa')
})
