const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('./database/mongoose')
const nodemailer = require('nodemailer');
const userMailData = require('./database/models/user')
const coupongenerator =  require('./codeGenerator/codeGenerator')

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





//create
//http://localhost:3000/list  // post
app.post('/create', (req, res) => {
    (new userMailData({ "mailId": req.body.mailId, "number": req.body.number }))
        .save()
        .then((list) => {

            var nodemailer = require('nodemailer');

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'abcxyz@gmail.com',
                    pass: '**********'
                }
            });

            let mailOptions = {
                from: 'manishbandewar11111@gmail.com',
                to: `${req.body.mailId}`,
                subject: 'You have Just Got new Amazing Coupon',
                html:`<h2>Thank you for signing with INTELLIMIND</h2><h4>This is the gift from INTELLIMIND for you</h4><h4 style="color:Green">Coupon code : ${coupongenerator()}</h4>`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            res.send({ status: 200, message: 'Entry Saved successfully' })
        })
        .catch((error) =>
            console.log(error))
})

app.listen(3000, () => console.log("server is running on port 3000"))