const express = require('express');

const app = express();

var cors = require('cors');

app.use(cors());

const sequelize = require('./util/database');

const bodyParser = require('body-parser');

const productRoutes = require('./routes/product');


app.use(bodyParser.json({extended : false}));


app.use(productRoutes);

sequelize.sync()
.then(result => {
    //console.log(result);
    app.listen(4000);
})
.catch(err => {
    console.log(err);
});
