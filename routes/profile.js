const router = require('express').Router();
const User = require('../models/User');
const fileUploader = require('../config/cloudinary.config');
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require('../middlewares/jwt');

// @desc    Show user profile
// @route   GET /
// @access  Private
router.get('/:id', isAuthenticated, async (req, res, next) => {    
    const userFromDB = req.payload    
    try {    
      if (userFromDB.length === 0) {
        res.status(200).json({ response: 'No user found in the database ' });
      } else {
        res.status(200).json({ data: userFromDB })
      }
    } catch (error) {
      next(error);
    }  
  });



// @desc    Delete a user
// @route   DELETE /user/delete
// @access  Private

router.delete('/delete/:id', isAuthenticated, async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndUpdate(id);
      res.status(202).json({ data: deleteUser })
    }
    catch (error) {
    next(error);
  }
});


 
  module.exports = router;