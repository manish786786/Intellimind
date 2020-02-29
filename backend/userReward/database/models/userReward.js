const mongoose = require('mongoose')

const userRewardSchema = new mongoose.Schema({
    name : {
        type: String,
        trim: true,
        minlength: 3
    },
    mailId : {
        type: String,
        trim: true,
        minlength: 3
    },
    number : {
        type: Number,
        trim: true,
        minlength: 3
    },
    points : {
        type: Number,
        trim: true,
        minlength: 3
    }
});

const userRewardData = mongoose.model('userRewardData', userRewardSchema)

module.exports = userRewardData;