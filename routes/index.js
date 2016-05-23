var express = require('express');
var router = express.Router();
var User = require("../models/user");

router.get("/get-all", function(req, res){
	User.find({}, function(err, list){
		if(!err && list){
			res.send(list);
		}else{
			res.send(400);
		}
	});
});

router.post("/save", function(req, res){
	var user = new User({
		name: "Pramod",
		email: "pramod@codeorroad.com",
		password: "pskd1382"
	});
	user.save(function(err){
		if(!err){
			res.send({status: true});
		}else{
			res.send({status: false});
		}
	});
});

module.exports = router;