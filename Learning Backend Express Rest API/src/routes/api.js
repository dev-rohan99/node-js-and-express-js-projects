const express = require('express');
const router = express.Router();

// const { helloGet, helloPost } = require('../controllers/helloController');
const studentsController = require('../controllers/studentsController');


// router.get('/hello-get', helloGet);
// router.post('/hello-post', helloPost);

// mongodb
router.post('/create', studentsController.InsertData);


module.exports = router;
