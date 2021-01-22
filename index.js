require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use('/dashboard' , require('./routes/dashboard'));
app.use('/dashboard/stocks', require('./routes/stocks'));


app.get('/', (req, res) => {
    res.send('This is the Sign Up and Login Page')
});

const server = app.listen(process.env.PORT || 4000, () => console.log(`You're listening to the smooth sounds of port ${process.env.PORT || 4000}`));
module.exports = server;