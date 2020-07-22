const express = require('express');
const { registerUsers, loginUsers, getMe, forgotPassword, resetPassword } = require('../controllers/auth');
const { protect, authorize } = require('../middleware/auth');




const router = express.Router();





router.post('/register', registerUsers);
router.post('/login', loginUsers);
router.get('/me', protect, getMe);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);



module.exports = router;

