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
    img:{
        data:Buffer,
        contentType: String
    }


},
{
    timestamps: true
})

module.exports = mongoose.model('Job',jobSchema)