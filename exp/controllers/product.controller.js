const Product = require("../models/product.model");

exports.create = function(req, res, next) {
  const product = new Product({
    name: req.body.name,
    price: req.body.price
  });

  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};

exports.getById = function(req, res, next) {
  Product.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.update = function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) return next(err);
    res.send("Product udpated.");
  });
};

exports.delete = function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
