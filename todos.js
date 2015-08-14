var express = require('express');

var router = express.Router();	

var toDoItems =  [
			{id : 1, desc: 'foo'},
			{id : 2, desc: 'bar'},
			{id : 3, desc: 'baz'},
		];

router.get('/',function(req,res){


	res.render('index',{
		title : 'My App',
		items : toDoItems
	})
});

router.post('/add',function(req,res){
     
      var newItem = req.body.newItem;
      console.log(newItem);
      toDoItems.push({id: toDoItems.length + 1, desc: newItem});
/*      res.render('index',{
      	title : 'My App',
      	items : toDoItems
      })*/
	  res.redirect('/');

});


module.exports = router;