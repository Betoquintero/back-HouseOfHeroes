const router = require('express').Router();
const Collection = require ('../models/Collection');
const Read = require ('../models/Reads');
const Event = require ('../models/Event');
const fileUploader = require('../config/cloudinary.config');
const ErrorResponse = require('../utils/error');
const { isAuthenticated } = require('../middlewares/jwt');


// @desc    Show  a collection
// @route   GET /
// @access  Private
router.get('/', isAuthenticated, async (req, res, next) => {   
  const userId = req.payload._id 
    try {
        const userCollection = await Collection.findOne({ userId:userId }).populate({
            path: 'events',
            model: 'Event',
            populate: {
                path: 'issues',
                model: 'Issue'
            }
        });
        res.status(201).json({ data: userCollection })             
    } catch (error) {
      next(error);
    }
  });

// @desc    Create an event collection
// @route   POST /
// @access  Private
  router.post('/:id', isAuthenticated, async (req, res, next) => { 
    const {id} = req.params  
    const userId = req.payload._id  
      try {          
        const collection = await Collection.findOne({ userId: userId });
        if(collection){
            if(!collection.events.includes(id)){
                collection.events.push(id);
                collection.save();
                res.status(201).json({ data: collection })   
            } else {
                res.status(201).json({ data: collection, message: "Event is already on user's collection" })   
            }
        } else {
            const collection = await Collection.create({userId, events:id});
            res.status(201).json({ data: collection })     
        }                 
      } catch (error) {
        next(error);
      }
    });

// @desc    Delete an event collection
// @route   GET /delete-event/:id
// @access  Public
router.get('/delete-event/:id', isAuthenticated, async (req, res, next) => {  
  const { id } = req.params;
  const userId = req.payload._id
  try {
    const userCollection = await Collection.findOne({userId: userId});
    userCollection.events.pull(id);
    userCollection.save();    
    res.status(202).json({ data: userCollection });
  } catch (error) {
    next(error);
  }
});    

// @desc    Show  issue collection
// @route   GET /
// @access  Private
router.get('/issue', isAuthenticated, async (req, res, next) => {   
  const userId = req.payload._id 
    try {
        const userCollection = await Collection.findOne({ userId:userId }).populate("issues");
        res.status(201).json({ data: userCollection })             
    } catch (error) {
      next(error);
    }
  });

// @desc    Create Issues collection
// @route   POST /
// @access  Private
  router.post('/issue/:id', isAuthenticated, async (req, res, next) => { 
    const {id} = req.params  
    const userId = req.payload._id  
      try {          
        const collection = await Collection.findOne({ userId: userId });
        if(collection){
            if(!collection.issues.includes(id)){
                collection.issues.push(id);
                collection.save();
                res.status(201).json({ data: collection })   
            } else {
                res.status(201).json({ data: collection, message: "Issue is already on user's collection" })   
            }
        } else {
            const collection = await Collection.create({userId, issues:id});
            res.status(201).json({ data: collection })     
        }                 
      } catch (error) {
        next(error);
      }
    });

// @desc    Delete an issue collection
// @route   GET /delete-issue/:id
// @access  Public
router.get('/delete-issue/:id', isAuthenticated, async (req, res, next) => {  
  const { id } = req.params;
  const userId = req.payload._id
  try {
    const userCollection = await Collection.findOne({userId: userId});
    userCollection.issues.pull(id);
    userCollection.save();    
    res.status(202).json({ data: userCollection });
  } catch (error) {
    next(error);
  }
});

  module.exports = router;

