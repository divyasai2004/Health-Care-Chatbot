const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Fullname: String,
    email:String,
    dob:Number,
    gender:String,
    username:String,
    password:String
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;
