const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('home'));

router.get('/views/welcome',(req, res) => res.render('welcome'));

router.get('/login', ensureAuthenticated,(req,res)=>
  res.render('login'));

router.get('/doctor-add', ensureAuthenticated,(req,res)=>
  res.render('doctor-add'));

  router.get('/patient-add', ensureAuthenticated,(req,res)=>
  res.render('patient-add'));
// Dashboard




module.exports = router;
