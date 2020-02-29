const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('./database/mongoose')

const userRewardData = require('./database/models/userReward')


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

//http://localhost:3001/userRewardList  //get
app.get('/userRewardList', (req, res) => {
    userRewardData.find({})
        .then((list) =>
            res.send(list))
        .catch((error) =>
            console.log(error))
})



app.listen(3001, () => console.log("server is running on port 3001"))