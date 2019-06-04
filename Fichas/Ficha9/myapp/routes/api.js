var express = require('express');
var router = express.Router();


var author_controller = require('../controllers/personController');


router.get('/persons/:id',author_controller.author_detail);

// router.get('/persons',author_controller.author_list);

module.exports = router;