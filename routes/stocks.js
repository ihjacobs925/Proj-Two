const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   // res.send('This is where the user can scroll through, search for and save stocks to track.')
   let stocksUrl = `https://cloud.iexapis.com/beta/ref-data/exchange/NYS/symbols?token=${process.env.IEXCLOUD_API_TOKEN}`;
   axios.get(stocksUrl).then(apiResponse => {
      let stock = apiResponse.data.results;
      res.render('stocks', { stocks: stock });
      //res.render('stocks', {stocks: apiResponde.data.Search})
      //let stocks = apiResponse.data.name;
      //res.render('index', { stocks: stocks });
   })
});

router.get('/', (req, res) => {
   let stockQueryUrl = `https://cloud.iexapis.com/beta/ref-data/exchange/NYS/symbols?s=${req.query.searchTerm}&token=${process.env.IEXCLOUD_API_TOKEN}`;
   axios.get(stockQueryUrl).then(apiResponse => {
      console.log(apiResponse);
   })
});

//POST /dashboard/stocks - receive the name of a company and add it to the database
// router.post('/', (req, res) => {
//     //
// })

module.exports = router;