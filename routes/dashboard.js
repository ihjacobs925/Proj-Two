const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../models');

router.get('/', (req, res) => {
    res.send('This is the User Dashboard')
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