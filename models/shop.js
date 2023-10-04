const Sequelize = require('sequelize');

const sequelize = require('../util/database');  // database pool of connections

// create we create a model in which 'product' is name. we use the js objects in sequelize
const Shop = sequelize.define('shop' , {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true,
  },

  name : {
   type :  Sequelize.STRING,
   allowNull : false 
  },

  description: {
    type : Sequelize.STRING,
    allowNull: false
  },

  cost : {
    type: Sequelize.DOUBLE,
    allowNull: false
  },

  quantity : {
    type : Sequelize.INTEGER,
    allowNull : false
  }

});  

module.exports = Shop;