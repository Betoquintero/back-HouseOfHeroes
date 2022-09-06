const router = require('express').Router();
const User = require('../models/User');

// @desc    Get all DC parts
// @route   GET /
// @access  Public
router.get('/', async (req, res, next) => {
    try {    
    const userFromDB = await User.findById(user._id);
      if (user.length === 0) {
        res.status(200).json({ response: 'No user found in the database ' });
      } else {
        res.status(200).json({ data: userFromDB })
      }
    } catch (error) {
      next(error);
    }  
  });
 
  module.exports = router;