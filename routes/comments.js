const router = require('express').Router();
const User = require('../models/User');
const Comment = require('../models/Comment');
const fileUploader = require('../config/cloudinary.config');
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require('../middlewares/jwt');



// @desc    Displays de comment section of the coin required.
// @route   GET /comments/"coin name"
// @access  Private
router.get('/:item', isAuthenticated, async (req, res, next) => {  
    const userFromDb = req.payload;
    const {item} = req.params
       try {
        const user = await User.findById(userFromDb._id);        
        const userComment = await Comment.find({ itemCommented: item });
        res.status(201).json({ data: userComment }) ;        
    } catch (error) {
        next(error)
    }
  });

// @desc    Sends the comment in the form to the data base
// @route   POST /comments/"coin name"
// @access  Private  
router.post('/:item', isAuthenticated, async (req, res, next) => {
    const { comment, itemCommented, commentingUser, userImage } = req.body;
    const userFromDb = req.payload;
    const {item} = req.params      
    if (!comment) {
        res.status(200).json({ response: 'Please write a comment' });
    }
    try {
      const userComment = await Comment.create({comment, itemCommented, commentingUser, userImage});
      res.status(201).json({ data: userComment })        
    } catch (error) {
      next(error)
    }
  });

  module.exports = router;