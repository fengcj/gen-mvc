var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();


// config
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// use middleware



app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'/bower_components')));
app.use(bodyParser());

// self middleware
app.use(function(err,req,res,next){

	console.log(req.method + ' ' + req.url + ' ' + (new Date()));
	next();  //  must be call

});


// use routes
app.use(require('todos'));




app.listen(1337,function(){
	console.log('ready on port 1337');
})