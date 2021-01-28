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

.then(([stock, created]) => {
   user.addStock(stock).then(relation => {
       console.log(`${stock.name} added to ${user.name}`);
       console.log(relation);
   }).catch(err => console.log(err));
})

// db.stock.findOne({
//     include: [db.user]
// })
// .then(stock => {
//     console.log(`${stock.user.length} ${stock.name, stock.symbol}`)
})
