const mongoose = require('mongoose') 
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        index:true,
        lowercase:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        min:10,
        max:10
    }
});

const user = mongoose.model('user', userSchema)
module.exports = user;