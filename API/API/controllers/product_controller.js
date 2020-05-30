var express = require('express');
var router = express.Router();
var Product = require('../product');

router.post('/', (req, res) => {

    let p = new Product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        departments: req.body.departments
    });
    Product.create({
        name: p.name,
        price: p.price,
        stock: p.stock,
        department: p.departments
    }).then(() => {
        res.statusCode = 200;
        res.json(p)
    }).catch((err) => {
        console.error(err)
    })
});

router.get('/', (req, res) => {
    Product.findAll({}).then(prods => {
        res.statusCode = 200;
        res.json(prods)
    }).catch((err) => {
        console.error(err);
    })
});

// router.delete('/:id', (req, res) => {
//     if (isNaN(req.params.id)) {
//         res.sendStatus(404);
//     } else {
//         var id = req.params.id;
//         Product.destroy({
//                 where: {
//                     id: id
//                 }
//             })
//             .then(deletedRecord => {
//                 if (deletedRecord === 1) {
//                     res.statusCode = 200;
//                     res.json({
//                         message: "Product deleted Successfully"
//                     });
//                 } else {
//                     res.statusCode = 404;
//                     res.json({
//                         message: "Product not found"
//                     })
//                 }
//             }).catch(function (error) {
//                 res.status(500).json(error);
//             });
//     }
// })

// router.patch('/:id', (req, res) => {
//     if (isNaN(req.params.id)) {
//         res.statusCode = 404;
//     } else {
//         var id = parseInt(req.params.id);
//         let p = new Product({
//             name: req.body.name,
//             price: req.body.price,
//             stock: req.body.stock,
//             departments: req.body.departments
//         });
//         Product.update({
//                 name: p.name,
//                 price: p.price,
//                 stock: p.stock,
//                 department: p.departments
//             }, {
//                 where: {
//                     id: id
//                 }
//             })
//             .then((updatedFile) => {
//                 if (updatedFile == 1) {
//                     res.statusCode = 200;
//                     res.json({
//                         message: "Product updated Succeffully"
//                     });
//                 } else {
//                     res.statusCode = 404;
//                     res.json({
//                         message: "Product not found"
//                     })
//                 }
//             }).catch(err => {
//                 console.error(err)
//             })
//     }
// })

module.exports = router;