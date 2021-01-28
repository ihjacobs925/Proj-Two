# Proj-Two

sequelize model:create --name user --attributes name:string,age:integer,email:string

sequelize model:create --name stock --attributes 

decide where I want to mount this
look at how req.query works (req.body or req.params)?
post vs get request?
//models.stock.belongsToMany(models.user, {through: "usersStocks"})
//models.user.belongsToMany(models.stock, {through: "usersStocks"}) usersId, stocksId

sequelize model:create --name user --attributes email:string,name:string,password:string

<% getStocks.forEach(stock => { %>
    <div>
        <a href="/dashboard/<%= getStocks.name %><%= getStocks.symbol %>"><h4><%= getStocks.name %> <%= getStocks.symbol %></h4></a>
    </div>
<% }) %>

<form method="POST" action="/dashboard/<%= stocks.name %><%= stocks.symbol %>?_method=DELETE">
    <input hidden type="text" name="name" value="<%= getStocks.name %>">
    <input hidden type="text" name="symbol" value="<%= getStocks.symbol %>">
    <button type="submit">Delete from Tracker</button>
</form>