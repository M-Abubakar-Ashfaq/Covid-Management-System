const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
var Doctor = require('/git/Covid-Management-System/models/Doctor');


exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new Doctor({
        name : req.body.name,
        province : req.body.province,
        city: req.body.city,
        address : req.body.address,
        phone : req.body.phone_no,
        gender : req.body.gender
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

exports.destroy = (req, res)=>{
    
   const name = req.body.search;
    console.log(name);
    Userdb.find({name: name})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${name}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + name
            });
        });
    }
