const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.findAllProducts = (req, res) => {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
      .then(product => res.json(product))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports.createProduct = ( request, response) => {
    const { title, price, description} = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(err => response.status(400).json(err));
};

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedProduct => response.json(updatedProduct))
    .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}