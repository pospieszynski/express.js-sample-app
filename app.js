var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views') ) //function from path module

app.get('/', function(request, response){ // second arg is an object containing all of the data needed in a view
  response.render('index', { title: 'Sample applciation - node.js', items: [{desc: 'foo'}, {title: 'bar'}] }) // uses path and extesion(ejs) from cofiguration
})

app.post('/new', function(request, response){ // second arg is an object containing all of the data needed in a view
  var item = request.body.newItem
  console.log(item)
  response.redirect('/')
})

app.listen(1337, function(){
  console.log('dupa')
})
