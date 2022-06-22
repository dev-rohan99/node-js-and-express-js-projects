const express = require('express');
const authTokenCreate = require('../controllers/authTokenCreateController');
const { createToken, decodeToken } = require('../controllers/JWPpractice');
const router = express.Router();
const studentsController = require('../controllers/studentsController');
const tokenVarify = require('../middleware/tokenVarifyMiddleware');


router.get('/token', authTokenCreate);
router.post('/create', studentsController.InsertData);
router.get('/', studentsController.readStudent);
router.patch('/:id', tokenVarify, studentsController.updateStudent);
router.delete('/:id', tokenVarify, studentsController.deleteData);

// encode and decode using JWT
router.get('/create-token', createToken);
router.get('/decode-token', decodeToken);

module.exports = router;
