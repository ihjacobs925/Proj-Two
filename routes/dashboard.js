const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');
const methodOverride = require('method-override');

//dashboard
router.get('/', isLoggedIn, (req, res) => { 
    db.stock.findAll()
    .then((getStocks) => {
      console.log(getStocks, "dash 13");
      res.render('dashboard', {getStocks: getStocks});
    }).catch(err => console.log(err));
})

router.post('/', (req, res) => {
   db.user.findOrCreate({
      where: {
          id: 1,
      }
  })
  .then(([user, created]) => {
      console.log(user, "dash 25");
      return db.stock.findOrCreate({
          where: {
              name: req.body.name,
              symbol: req.body.symbol
          }
      })
     .then(([stock, created]) => {
     user.addStock(stock).then(relation => {
         console.log(`${stock.name} added to ${user.name}, dash 34`);
         console.log(relation, "dash 35");
         res.redirect('/dashboard');
     }).catch(err => console.log(err));
    })
  })
})

 //DELETE ROUTE
 router.delete('/', (req, res) => {
     console.log("@@@@@@@", req.body.name);
   db.stock.destroy({
    where: {
      name: req.body.name
    }
  }).then(response => {
     console.log('I did it!');
    res.redirect('/dashboard')
  }).catch(err => {
      console.log(err);
    //res.render('error')
  })
});
 

module.exports = router;