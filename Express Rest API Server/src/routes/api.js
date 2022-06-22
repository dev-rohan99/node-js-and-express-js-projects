const express = require('express');
const { createProfile, userLogin, profileShow, updateUser } = require('../controllers/profileController');
const { createToDo, showToDo, updateToDo, updateToDoStatus, removeToDo, searchToDo, searchToDoByDate } = require('../controllers/toDoListController');
const userVarify = require('../middleware/userVarify');
const router = express.Router();



// user registration
router.post('/create-account', createProfile);
// user login
router.post('/login', userLogin);
router.get('/profile', userVarify, profileShow);
router.patch('/update-profile/:id', userVarify, updateUser);

// to do route
router.post('/create-to-do', userVarify, createToDo);
router.get('/to-do', userVarify, showToDo);
router.post('/update-to-do', userVarify, updateToDo);
router.post('/update-to-do-status', userVarify, updateToDoStatus);
router.post('/remove-to-do', userVarify, removeToDo);
router.get('/search-to-do', userVarify, searchToDo);
router.get('/search-to-do-date', userVarify, searchToDoByDate);



module.exports = router;



