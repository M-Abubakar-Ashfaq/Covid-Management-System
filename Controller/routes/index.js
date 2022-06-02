const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('/git/Covid-Management-System/config/auth.js');
const doctors = require('/git/Covid-Management-System/Controller/doctors');

// Welcome Page

router.use(express.static('views'))
router.use('/css',express.static(__dirname+'views/css'))
router.use('/img',express.static(__dirname+'views/images'))


router.get('/', forwardAuthenticated, (req, res) => res.render('home'));

router.post('/doctors/add', doctors.create);
router.delete('/doctors/delete', doctors.destroy);

router.get('/views/welcome',(req, res) => res.render('welcome'));

router.get('/login', ensureAuthenticated,(req,res)=>
  res.render('login'));

router.get('/doctor-add', ensureAuthenticated,(req,res)=>
  res.render('doctor-add'));

  router.get('/doctor',(req,res)=>{
    res.render('doctor.ejs');
}
)
router.get('/doctor-delete', ensureAuthenticated,(req,res)=>{
    res.render('doctor-delete.ejs')
}
)
router.get('/doctor-display', ensureAuthenticated,(req,res)=>{
    res.render('doctor-display.ejs')
}
)
router.get('/doctor-update', ensureAuthenticated,(req,res)=>{
    res.render('doctor-update.ejs')
}
)

  router.get('/patient-add', ensureAuthenticated,(req,res)=>
  res.render('patient-add'));

  router.get('/patient-delete', ensureAuthenticated,(req,res)=>
  res.render('patient-delete'));

  router.get('/patient-display', ensureAuthenticated,(req,res)=>
  res.render('patient-display'));

  router.get('/patient-update', ensureAuthenticated,(req,res)=>
  res.render('patient-update'));

  router.get('/home', ensureAuthenticated,(req,res)=>
  res.render('home'));




 





module.exports = router;
