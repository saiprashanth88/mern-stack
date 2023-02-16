require('dotenv').config();
const userLib = require("./backend/lib/userLib");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/resume', function(req, res) {
    res.sendFile(__dirname + '/resume.html');
});

app.get('/samplecard', function(req, res) {
    res.sendFile(__dirname + '/samplecard.html');
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to database');


        // userLib.createUser({
        //     userName:"beingzero",
        //     yearOfGraduation:2040,
        // },function(err,result){
        //     if(err){
        //         console.error(err);
        //     }
        //     else{
        //         console.log(result);
        //     }
        // });
        // TODO : donot create a user if atleast 1 user exist in the table
        // userLib.getAllUsers(function(err, usersList) {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         if (usersList.length === 0) {
        //             userLib.createFirstUser(function(err, res) {
        //                 if (err) {
        //                     console.error(err);
        //                 } else {
        //                     console.log(res);
        //                 }
        //             });
        //         }
        //     }
        // });

        // userLib.deleteUser("saiprashanth88",function(err,result){
        //     if(err){
        //         console.error(err);
        //     }
        //     else{
        //         console.log(result);
        //     }

        // });

        userLib.getUserByFilter({userNmae:"Prashanth"},function(err,result){
                if(err){
                    console.error(err);
                }
                else{
                    confirm.log(result);
                }
        });


        // userLib.updateUser(function(err,result){
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         confirm.log(result);
        //     }

        // });





        app.listen(port, function() {
            console.log('Server started on port ' + port);
        });
    }
});
