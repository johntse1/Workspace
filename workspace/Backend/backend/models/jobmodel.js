const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    title: {
        type:String,
        required: [true, 'Please add a title value'] 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    acceptedby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default:[]
    },
    text: {
        type:String,
        required: [true, 'Please add a text value'] 
    },
    price: {
        type:Number,
        required: [true, 'Please add a price value'] 
    },
    tags: {
        type: [String]
    },
    status:{
        type:String,
        required:true,
    },
    img:{
        data:Buffer,
        contentType: String
    }


},
{
    timestamps: true
})

module.exports = mongoose.model('Job',jobSchema)