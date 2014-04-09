 
/**
 * Module dependencies.
 */


var express = require('express')
  , api = require('./routes/api')
  , index = require('./routes/index')
  , http = require('http')
  , path = require('path');

var app =  module.exports = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


app.get('/', index.index);

// app.post('/payments/:id', payments.notification);

// JSON API
app.get('/switches', api.switches);
app.get('/switches/:id', api.switch);
app.post('/switches', api.addSwitch);
app.put('/switches/:id', api.editSwitch);
app.delete('/switches/:id', api.deleteSwitch);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
