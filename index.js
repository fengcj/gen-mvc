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
app.use(function(req,res,next){

	console.log(req.method + ' ' + req.url + ' ' + (new Date()));
	next();  //  must be call

});


// define routes

var toDoItems =  [
			{id : 1, desc: 'foo'},
			{id : 2, desc: 'bar'},
			{id : 3, desc: 'baz'},
		];

app.get('/',function(req,res){


	res.render('index',{
		title : 'My App',
		items : toDoItems
	})
});

app.post('/add',function(req,res){
     
      var newItem = req.body.newItem;
      console.log(newItem);
      toDoItems.push({id: toDoItems.length + 1, desc: newItem});
/*      res.render('index',{
      	title : 'My App',
      	items : toDoItems
      })*/
	  res.redirect('/');

});


app.listen(1337,function(){
	console.log('ready on port 1337');
})