const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:[true, 'Please add a name']
    },
    last_name:{
        type:String,
        required:[true, 'Please add a name']
    },
    email:{
        type:String,
        required:[true, 'Please add an email'],
        unique: true
    },
    password:{
        type:String,
        required:[true, 'Please add a password']
    },
    birthday:{
        type:Date,
        required:false
    },
    description:{
        type:String,
        required:false
    }

    
},
{
    timestamps:true
})

module.exports = mongoose.model('User',userSchema)