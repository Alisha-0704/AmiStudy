const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

let userSignupSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : {
        type : String,
        select : false
    },
    resetPasswordToken : String,
    resetPasswordExpires : Date
});

userSignupSchema.plugin(passportLocalMongoose, {usernameField : 'email'});
module.exports = mongoose.model('UserSignup', userSignupSchema); 
