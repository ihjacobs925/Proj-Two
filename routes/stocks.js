const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   // res.send('This is where the user can scroll through, search for and save stocks to track.')
   let stocksUrl = `https://cloud.iexapis.com/beta/ref-data/symbols?token=pk_87781e053e0a4f94aeb8cecd7ec0fd7e`;
   axios.get(stocksUrl).then(apiResponse => {
       console.log(apiResponse);
      // let stocks = apiResponse.data.results;
      // res.render('index', { stocks: stocks});
   })
});

//POST /dashboard/stocks - receive the name of a company and add it to the database
// router.post('/', (req, res) => {
//     //
// })

module.exports = router;