var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

routes = require('./routes/tvshows')(app);

mongoose.connect('mongodb://4b2318f26094197f315f0333865968ff:fca8aa4562254f3423f75caf1c3caf07@leader.mongodb.discoverd:27017/045f9f9d570e597d7025b699261f91fd', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
