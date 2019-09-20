let Author = require('mongoose').model('Author');
let errorHandler = require('./helpers/error-handler');

module.exports = {
    index(req, res) {
        Author.find().sort({
                name: 1
            })
            .then(data => {
                res.json(data)
            }) // all responses just spit json
            .catch(errorHandler.bind(res)); // .bind ensures this will refer to the response object and not the errorHandler function
    },
    show(req, res) {
        Author.findById(req.params.id)
            .then(data => res.json(data))
            .catch(errorHandler.bind(res));
    },
    create(req, res) {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(errorHandler.bind(res));
    },
    update(req, res) {
        Author.update({
                _id: req.params.id
            }, {
                name: req.body.name
            }, {
                new: true,
                runValidators: true
            })
            .then(data => res.json(data))
            .catch(errorHandler.bind(res));
    },
    destroy(req, res) {
        Author.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(errorHandler.bind(res));
    },
};