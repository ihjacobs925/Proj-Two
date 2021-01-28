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
   // console.log(stock);
   user.addStock(stock).then(relation => {
       console.log(`${stock.name} added to ${user.name}`);
       console.log(relation);
   })
})

db.stock.findOne({
    include: [db.user]
})
.then(stock => {
    console.log(`${stock.user.length} ${stock.name, stock.symbol}`)
})
