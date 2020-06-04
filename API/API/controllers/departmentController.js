var express = require("express");
var router = express.Router();
var Department = require("../models/Department");
var Product = require(".//productController");
router.post("/", (req, res) => {
  console.log(req.body);

  let department = new Department({ name: req.body.name });
  department.save((err, dep) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(dep);
  });
});

router.get("/", (req, res) => {
  Department.find().exec((err, deps) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(deps);
  });
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let prods = await Product.find({ departments: id }).exec();
    if (prods.length > 0) {
      res.status(500).send({
        msg:
          "Could not remove this department. You may have to fix its dependecies before"
      })
    } else {
      await Department.deleteOne({ _id: id });
      res.status(200).send({});
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal error.", error: error });
  }
});

router.patch("/:id", (req, res) => {
  Department.findById(req.params.id, (err, dep) => {
    if (err) res.status(500).send(err);
    else if (!dep) res.status(404).send({});
    else {
      dep.name = req.body.name;
      dep
        .save()
        .then((d) => res.status(200).send(d))
        .catch((e) => res.status(500).send(e));
    }
  });
});

module.exports = router;
