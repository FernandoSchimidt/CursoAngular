var express = require('express');
var router = express.Router();
var Department = require('../department');


router.post('/', function (req, res) {
    // console.log(req.body);
    let d = new Department({
        name: req.body.name
    });
    Department.create({
        name: d.name
    }).then(() => {
        res.statusCode = 200;
        res.json(d)
    }).catch((err) => {
        console.error(err)
    })
});

//lista os departamentos
router.get('/', (req, res) => {
    Department.findAll({}).then(deps => {
        res.statusCode = 200;
        res.json(deps)
    })
});

//delete um departamento
router.delete('/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(404);
    } else {
        var id = req.params.id;
        Department.destroy({
                where: {
                    id: id
                }
            })
            .then(deletedRecord => {
                if (deletedRecord === 1) {
                    res.statusCode = 200;
                    res.json({
                        message: "Deleted Successfully"
                    });
                } else {
                    res.statusCode = 404;
                    res.json({
                        message: "record not found"
                    })
                }
            }).catch(function (error) {
                res.status(500).json(error);
            });
    }
})


// atualiza o departamento
router.patch('/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.statusCode = 404;
    } else {
        var id = parseInt(req.params.id);
        var name = req.body.name;
        console.log(name);
        Department.update({
                name: name
            }, {
                where: {
                    id: id
                }
            })
            .then((updatedFile) => {
                if (updatedFile == 1) {
                    res.statusCode = 200;
                    res.json({
                        message: "Updated Succeffully"
                    });
                } else {
                    res.statusCode = 404;
                    res.json({
                        message: "record not found"
                    })
                }
            }).catch(err => {
                console.error(err)
            })
    }
})

module.exports = router;