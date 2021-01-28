const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');

// /dashboard
router.get('/', isLoggedIn, (req, res) => {
    res.send('dashboard')
});

router.post('/stocks', (req, res) => {
    console.log(req.body);
     db.stock.findOrCreate({
        where: {
           name: req.body.name,
           symbol: req.body.symbol
        }
        
     }).then(([stock, created]) => {
        console.log(stock)
        res.redirect('/');
     }).catch(err => console.log(err));
 })
 

module.exports = router;