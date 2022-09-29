const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type:String,
        required: [true, 'Please add a text value'] 
    },
    tags: {
        type: [String]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Job',jobSchema)