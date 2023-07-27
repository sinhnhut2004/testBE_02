// const { authJwt } = require("../middleware");
// const controller = require("../controllers/user.controller");

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware');

// Xác thực người dùng trước khi cho phép truy cập các tuyến đường này
router.use(authMiddleware);

router.get('/profile', userController.getUserProfile);

module.exports = router;
