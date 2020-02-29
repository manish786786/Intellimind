const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    mailId : {
        type: String,
        trim: true,
        minlength: 3
    },
    number : {
        type: Number,
        trim: true,
        minlength: 3
    }
});

const userData = mongoose.model('userMailData', userSchema)

module.exports = userData;