const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
var Comment = require('/git/Covid-Management-System/models/Comment');


exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new Comment({
        name : req.body.name,
        phone : req.body.phone_no,
        message : req.body.message
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });


}
