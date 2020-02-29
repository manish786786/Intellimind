const mongoose = require('mongoose')

const referalRewardSchema = new mongoose.Schema({
    name : {
        type: String,
        trim: true,
        minlength: 3
    },
    points : {
        type: Number,
        trim: true,
        minlength: 3
    },
    noOfRef : {
        type: Number,
        trim: true,
        minlength: 3
    }
});

const referalRewardData = mongoose.model('referalRewardData', referalRewardSchema)

module.exports = referalRewardData;