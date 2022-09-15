const router = require('express').Router();
const Collection = require ('../models/Collection');
const Event = require ('../models/Event');
const fileUploader = require('../config/cloudinary.config');
const ErrorResponse = require('../utils/error');
const { isAuthenticated } = require('../middlewares/jwt');


// @desc    Create an collection
// @route   POST /
// @access  Public
router.get('/:id', isAuthenticated, async (req, res, next) => { 
  const { id } = req.params  
  const userId = req.payload._id 
    try {
        const userCollection = await Collection.find({ userId:userId }).populate("events");
        res.status(201).json({ data: userCollection })             
    } catch (error) {
      next(error);
    }
  });

// @desc    Create an collection
// @route   POST /
// @access  Public
  router.post('/:id', isAuthenticated, async (req, res, next) => { 
    const {id} = req.params  
    const userId = req.payload._id  
      try {
        const eventInDB = await Collection.find(id);
        console.log(eventInDB)
        if (eventInDB) {
          return next(new ErrorResponse(`Collection already exists`, 400))
        } else {
          const event = await Collection.create({userId, issues, events:id});
          res.status(201).json({ data: event })
        }       
      } catch (error) {
        next(error);
      }
    });

  module.exports = router;