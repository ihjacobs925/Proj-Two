# Proj-Two

sequelize model:create --name user --attributes name:string,age:integer,email:string

sequelize model:create --name stock --attributes 

decide where I want to mount this
look at how req.query works (req.body or req.params)?
post vs get request?
//models.stock.belongsToMany(models.user, {through: "usersStocks"})
//models.user.belongsToMany(models.stock, {through: "usersStocks"}) usersId, stocksId

sequelize model:create --name user --attributes email:string,name:string,password:string