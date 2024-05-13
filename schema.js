const { Sequelize,DataTypes} = require("sequelize")

const sequelize = new Sequelize("defaultdb","root","root",{
    host: "localhost",
    dialect:"mssql",
});

const Order = sequelize.define("orders", {
    userLineUid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  const Product = sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  
  Product.hasMany(Order);
  Order.belongsTo(Product);
  
  module.exports = {
    Order,
    Product,
    sequelize,
  };