const express = require('express');
const { registerUsers, loginUsers, getMe } = require('../controllers/auth');
const { protect, authorize } = require('../middleware/auth');




const router = express.Router();





router.post('/register', registerUsers);
router.post('/login', loginUsers);
router.get('/me', protect, getMe);



module.exports = router;

