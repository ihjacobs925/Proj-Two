const db = require('./models');

db.user.findOrCreate({
    where: {
        id: 1,
    }
})
.then(([user, created]) => {
    console.log(user, "test 9");
    return db.stock.findOrCreate({
        where: {
            name: 'Ian',
            symbol: 'IHJ'
        }
    })

.then(([stock, created]) => {
   user.addStock(stock).then(relation => {
       console.log(`${stock.name} added to ${user.name} test 19`);
       console.log(relation, "test 20");
   }).catch(err => console.log(err));
  })
})

// db.stock.findOne({
//     include: [db.user]
// })
// .then(stock => {
//     console.log(`${stock.user.length} ${stock.name, stock.symbol}`)
//})
