var Express = require( 'express' );
var Volleyball = require( 'volleyball' )
var app = new Express();

// app.use(function (req, res, next) {
// 	console.log(req.method, req.url);
// 	next();
// });

app.use(Volleyball);

app.get('/', function(req, res, next) {
	res.send("Hello World!");
	next();
});


// app.use('/special', function(req, res, next) {
// 	console.log("You reached the special area.");
// 	next();
// })









app.listen(3000, function() {
	console.log("Example app listening on port 3000!");
});