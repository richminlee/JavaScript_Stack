const { Author } = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.findAllAuthors = (req, res) => {
    Author.find()
      .then(authors => res.json(authors))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
      .then(author => res.json(author))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports.createAuthor = ( request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err));
};

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
    .then(updatedAuthor => response.json(updatedAuthor))
    .catch(err => response.status(400).json(err))
}
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}