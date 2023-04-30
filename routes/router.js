const express = require('express');
const router = express.Router();
const authController = require('../controller/authController')

//ROUTER PARA LAS VISTAS
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})


//Router para los metodos del controller
router.post('/register', authController.register)



module.exports = router