const express = require('express');
const { register, login, getProfile, getMentors } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/profile', auth, getProfile);

router.get('/mentors', getMentors);
module.exports = router;
