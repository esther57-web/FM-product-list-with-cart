const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');
const { upload, optimize} = require('../middleware/multer-config');

router.post('/', upload, optimize, articleCtrl.addArticle);
router.get('/' + '', articleCtrl.getAllArticles);
router.put('/:id', articleCtrl.updateArticle);
router.delete('/:id' + '', articleCtrl.deleteOneArticle);
//supp tout

module.exports = router;