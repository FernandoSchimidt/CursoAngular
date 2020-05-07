const express = require('express');
const bodtParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./Product');

var app = express();
app.use(bodtParser.json());
app.use(bodtParser.urlencoded({
    extended: true
}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/http_client', {
    useNewUrlParser: true
});

var myLogger = function (req, res, next) {
    console.log(req.body);
    next();
}
app.use(myLogger);

app.get('/products', (req, res) => {
    Product.find().lean().exec(
        (err, prods) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(prods);
        }
    );
})

app.listen(3000);