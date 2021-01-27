const db = require('./models');

db.user.findOrCreate({
    where: {
        id: 1,
    }
})
.then(([user, created]) => {
    console.log(user);
    return db.stock.findOrCreate({
        where: {
            name: 'Ian',
            symbol: 'IHJ'
        }
    })
})
.then(([stock, created]) => {
    console.log(stock);
})