const express = require('express');
const router = express.Router();
const path = require('path')
const request = require('request');


router.post('/create', function(req, res) {
    console.log('create user application');
    let name = req.body.name;
    console.log(name);

    // update postgresql db

    // send response success or failure (of updating db)
    res.send("changed the code");
});


router.post('/submit', function(req, res) {
    console.log('submit');
    let name = req.body.name;

    // update postgresql db

    // send response success or failure (of updating db)
    res.send("submitted");
});

module.exports = router;