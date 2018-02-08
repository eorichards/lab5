var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var descrip = req.query.description;
	data.friends.push({
		'name': name,
		'description': descrip,
		'imageURL': "http://lorempixel.com/400/400/people"
	});
	console.log(data);
		res.render('index', data);

 }