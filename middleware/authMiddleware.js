// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/**
 * Middleware to verify JWT and attach user to request
 */
export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token is present
  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user ID to request
      req.user = { id: decoded.id };
      next();
    } catch (error) {
      res.status(401).json({ error: 'Token is invalid or expired' });
    }
  } else {
    res.status(401).json({ error: 'No token provided' });
  }
};
