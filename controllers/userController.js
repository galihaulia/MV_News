const User = require('../models').User;

const details = (req, res, next) => {
    User
    .findOne({
        where: {
            id: req.verify.id
        }
    })
    .then(data => {
        return res.status(200).send(data);
    })
}

module.exports = {
    detail:details
}