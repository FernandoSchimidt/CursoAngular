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

app.get('/productserr', function (req, res) {
    setTimeout(
        () => {
            res.status(500).send({
                msg: "Error messagem from the server"
            });
        });
})

app.get('/productsdelay', (req, res) => {
    setTimeout(() => {
        Product.find().lean().exec(
            (err, prods) => {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(200).send(prods);
            }
        );
    }, 2000);
});

//retorna só id
app.get('/products_ids', (req, res) => {
    Product.find().lean().exec(
        (err, prods) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(
                prods.map(p => p._id));
        }
    );
});

//recebe id e retorna o nome
app.get('/products/name/:id', (req, res) => {
    const id = req.params.id;
    Product.findById(id,
        (err, prod) => {
            if (err)
                res.status(500).send(err);
            else if (!prod)
                res.status(404).send({})
            else
                res.status(200).send(prod.name)
        })
});

//Salva o produto
app.post('/products', (req, res) => {
    p = new Product({
        name: req.body.name,
        price: req.body.price,
        department: req.body.department

    });
    p.save((err, prod) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(prod);
        }

    })
});

app.delete('/products/:id', (req, res) => {
    Product.deleteOne({
        _id: req.params.id
    }, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({});
        }
    })
})

//edit

app.patch('/products/:id', (req, res) => {
    Product.findById({
        _id: req.params.id
    }, (err, prod) => {
        if (err) {
            res.status(500).sendFile(err);
        } else if (!prod) {
            res.status(404).send({});
        } else {
            prod.name = req.body.name;
            prod.department = req.body.department;
            prod.price = req.body.price;
            prod.save((err, prod) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(200).send(prod);
                }
            });
        }

    })
})

app.listen(3000);