const axios = require('axios');
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
   // res.send('This is where the user can scroll through, search for and save stocks to track.')
   let stocksUrl = `https://cloud.iexapis.com/beta/ref-data/exchange/NYS/symbols?token=${process.env.IEXCLOUD_API_TOKEN}`;
   axios.get(stocksUrl).then(apiResponse => {
      let stock = apiResponse.data;
      //console.log(stock);
      res.render('stocks', { stocks: stock });
      //res.render('stocks', {stocks: apiResponde.data.Search})
      //let stocks = apiResponse.data.name;
      //res.render('index', { stocks: stocks });
   })
});

router.get('/', (req, res) => {
   // res.send('This is where the user can scroll through, search for and save stocks to track.')
   let priceUrl = `https://cloud.iexapis.com/beta/stock/symbol/price?token=${process.env.IEXCLOUD_API_TOKEN}`;
   axios.get(priceUrl).then(apiResponse => {
      console.log(apiResponse.data)
     // let stock = apiResponse.data;
      //console.log(stock);
     // res.render('stocks', { stocks: stock });
      //res.render('stocks', {stocks: apiResponde.data.Search})
      //let stocks = apiResponse.data.name;
      //res.render('index', { stocks: stocks });
   })
});

router.get('/', (req, res) => {
   console.log(req.query);
   let stockQueryUrl = `https://cloud.iexapis.com/beta/ref-data/exchange/NYS/symbols?search/${req.query.symbol}&token=${process.env.IEXCLOUD_API_TOKEN}`;
   axios.get(stockQueryUrl).then(apiResponse => {
      let searchStock = apiResponse.data;

      console.log(searchStock);
   })
});

//POST /dashboard/stocks - receive the name of a company and add it to the database
router.post('/', (req, res) => {
   console.log(req);
    db.stock.findOrCreate({
       where: {
          name: req.body.name,
          symbol: req.body.symbol
       }
    }).then(([stock, created]) => {
      console.log(stock);
    }).catch(err => console.log(err));
})

module.exports = router;