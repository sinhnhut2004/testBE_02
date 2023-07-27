const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Access denied, token missing' });
  }
  try {
    const decodedToken = jwt.verify(token, 'secret-key');
    req.userId = decodedToken.userId;
    req.userRole = decodedToken.userRole; // Thêm thông tin về vai trò của người dùng từ JWT

    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
