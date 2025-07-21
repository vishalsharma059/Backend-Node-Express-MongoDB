const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware'); // Assuming you have a role middleware
const router = express.Router();

// Only admin can access this route

router.get('/admin', verifyToken, authorizeRoles("admin"), (req, res) => {
  res.status(200).json({ message: 'Welcome Admin!' });
});

// Both admin and manager can access this route

router.get('/manager', verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
  res.status(200).json({ message: 'Welcome Manager!' });
});

// All can access this route

router.get('/user', verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
  res.status(200).json({ message: 'Welcome User!' });
});

module.exports = router;