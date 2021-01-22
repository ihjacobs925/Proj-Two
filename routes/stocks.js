const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is where the user can scroll through, search for and save stocks to track.')
});

module.exports = router;