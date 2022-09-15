const router = require('express').Router();
const User = require('../models/User');
const Comment = require('../models/Comment');
const fileUploader = require('../config/cloudinary.config');
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require('../middlewares/jwt');
const ErrorResponse = require('../utils/error');



// @desc    Displays de comment section of the coin required.
// @route   GET /comments/:id
// @access  Private
router.get('/:item', async (req, res, next) => { 
    
    const {item} = req.params
       try {               
        const issueComment = await Comment.find({ issue_Id: item }).populate("userId");
        res.status(201).json({ data: issueComment }) ;        
    } catch (error) {
        next(error)
    }
  });

// @desc    Sends the comment in the form to the data base
// @route   POST /comments/:id
// @access  Private  
router.post('/:id', isAuthenticated, async (req, res, next) => {
    const { comment } = req.body;
    const userFromDb = req.payload._id;    
    const {id} = req.params      
    if (!comment) {
        return next(new ErrorResponse('Please fill all the fields to register', 400))
    }
    try {
      const userComment = await Comment.create({comment, issue_Id:id, userId: userFromDb });
      res.status(201).json({ data: userComment })        
    } catch (error) {
      next(error)
    }
  });

  module.exports = router;