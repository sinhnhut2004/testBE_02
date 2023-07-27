// const User = require('../models/user');
const db = require("../models");
const User = db.user;

const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId; // Được đặt bởi middleware xác thực
    const userRole = req.userRole; // Được đặt bởi middleware xác thực
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Kiểm tra quyền truy cập vào tuyến đường dựa trên vai trò của người dùng
    if (userRole === 'admin') {
      // Cho phép truy cập vào tuyến đường chỉ dành cho admin
      res.json({ message: 'Welcome Admin', user });
    } else {
      // Cho phép truy cập vào tuyến đường dành cho người dùng thông thường
      res.json({ message: 'Welcome User', user });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to get user profile' });
  }
};

module.exports = { getUserProfile };
