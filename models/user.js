var db = require('mongoose');
var hash = require('password-hash');

var UserSchema = new db.Schema({
							name : String,
							email : {type: String, unique: true},
							password : String,
							created_at: Date,
							updated_at: Date
						});

UserSchema.pre('save', function(next){
    if(!hash.isHashed(this.password)){
        this.password = hash.generate(this.password);
    }
    if(!this.created_at){
      	this.created_at = new Date();
    }
    this.updated_at = new Date();
    next();
});

var model = null;
try {
    model = db.model('User', UserSchema);
}catch(err){
    model = db.model('User');
}
module.exports = model;