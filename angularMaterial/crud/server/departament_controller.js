var express = require('express')
var router = express.Router();
var Departament = require('./departament');

router.post('/', function (req, res) {
    console.log(req.body);
    let d = new Departament({
        name: req.body.name

    });
    d.save((err, dep) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(dep)
    })
})

router.get('/', function (req, res) {
    Departament.find().exec((err, deps) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(deps)
    })
})

module.exports = router;