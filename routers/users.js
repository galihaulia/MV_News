var express = require('express');
var router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

const { detail } = require('../controllers/userController');
const { 
    allNews,
    detailNews,
    addNews,
    showNews,
    updateNews, 
    deleteNews 
} = require('../controllers/newsController');

router.get('/news', verifyToken, allNews);
router.get('/news/detail/:newsId', verifyToken, detailNews);

router.get('/details', verifyToken, detail);

router.post('/create/news', verifyToken, addNews);
router.get('/show/news', verifyToken, showNews);
router.put('/edit/news/:newsId', verifyToken, updateNews);
router.delete('/delete/news/:newsId', verifyToken, deleteNews);

module.exports = router;
