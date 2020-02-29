const mongoose = require('mongoose')

const signUpRewardSchema = new mongoose.Schema({
    name : {
        type: String,
        trim: true,
        minlength: 3
    },
    points : {
        type: Number,
        trim: true,
        minlength: 3
   
    }
});

const signUpRewardData = mongoose.model('signUpRewardData', signUpRewardSchema)

module.exports = signUpRewardData;