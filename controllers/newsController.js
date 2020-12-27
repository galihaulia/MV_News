const News = require('../models').News;
const User = require('../models').User;

const allNews = (req, res, next) => {
    News
    .findAll()
    .then(data => {
        return res.status(200).send(data);
    })
}

const detailNews = (req, res, next) => {
    News
    .findOne({
        where: {
            id: req.params.newsId
        }
    })
    .then(data => {
        return res.status(200).send(data);
    })
}


const addNews = (req, res, next) => {
    User
    .findOne({
        where:{
            id: req.verify.id
        }
    })
    .then(data => {
        const dataNews = {
            userId: data.id,
            author: data.lastName,
            title: req.body.title,
            contents: req.body.contents
        }

        News
        .create(dataNews)
        .then(data => {
            return res.status(200).send(data);
        })
    })
}

const showNews = (req, res, next) => {
    News
    .findAll({
        where: {
            userId: req.verify.id
        }
    })
    .then(data => {
        return res.status(200).send(data);
    })
}

const updateNews = (req, res, next) => {
    User
    .findOne({
        where: {
            id: req.verify.id
        }
    })
    .then(data => {
        const dataUpdate = {
            userId: data.id,
            author: data.lastName,
            title: req.body.title,
            contents: req.body.contents
        }
        News
        .update(dataUpdate,{
            where: {
                id: req.params.newsId
            }
        })
        .then(data => {
            return res.status(200).send(data);
        })
    })
}

const deleteNews = (req, res, next) => {
    User
    .findOne({
        where: {
            id: req.verify.id
        }
    })
    .then(data => {
        News
        .destroy({
            where:{
                userId: data.id,
                id: req.params.newsId
            }
        })
        .then(data => {
            return res.status(200).send("Success Delete");
        })
    })
}


module.exports = {
    allNews:allNews,
    detailNews:detailNews,
    addNews: addNews,
    showNews:showNews,
    updateNews:updateNews,
    deleteNews:deleteNews
}