const express = require('express');
const controller = require('../controllers/authController')
const router = express.Router();


// POST METHODS
router.route('/register').post(controller.register);
// router.route('/registerMail').post();
router.route('/authenticate').post((req,res) => res.end());
router.route('/login').post(controller.login);

// GET METHODS
router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);

// PUT METHODS
router.route('/updateuser').put(controller.updateUser);
router.route('/resetPassword').put(controller.resetPassword);

module.exports = router;
