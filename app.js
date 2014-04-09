 
/**
 * Module dependencies.
 */


var express = require('express')
  , routes = require("./routes")
  , routesPayments = require("./routes/payments")
  , routesApi = require("./routes/api")
  , routesIndexIndex = require("./routes/index")
  , http = require('http')
  , path = require('path');

var app = express();


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


app.get('/', routesIndexIndex.index);
app.post('/payments/:id', routesPayments.notification);

// JSON API
app.get('/switches', routesApi.switches);
app.get('/switches/:id', routesApi.switch);
app.post('/switches', routesApi.addSwitch);
app.put('/switches/:id', routesApi.editSwitch);
app.delete('/switches/:id', routesApi.deleteSwitch);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
