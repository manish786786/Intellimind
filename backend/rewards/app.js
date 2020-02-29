const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('./database/mongoose')

const referalRewardData = require('./database/models/rewards')
const signUpRewardData = require('./database/models/signUpReward')



/*
CORS - cross origin resquest security
this allow to access our backend from any origin
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,Origin,X-Requested-With');
    next();
});

//http://localhost:3002/userRewardList  //get
app.get('/referalRewardList', (req, res) => {
    referalRewardData.find({})
        .then((list) =>
            res.send(list))
        .catch((error) =>
            console.log(error))
})

//http://localhost:3002/userRewardList  //get
app.get('/signUpRewardList', (req, res) => {
    signUpRewardData.find({})
        .then((list) =>
            res.send(list))
        .catch((error) =>
            console.log(error))
})


app.listen(3002, () => console.log("server is running on port 3002"))