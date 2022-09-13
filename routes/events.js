const router = require('express').Router();
const Event = require ('../models/Event');
const fileUploader = require('../config/cloudinary.config');

// @desc    Get all DC and Marvel events
// @route   GET /
// @access  Public
router.get('/', async (req, res, next) => {  
    try {
      const events = await Event.find({});
      if (events.length === 0) {
        res.status(200).json({ response: 'No events found in the database ' });
      } else {
        const sorted = [...events].sort((a,b) => a.order - b.order);
        res.status(200).json({ data: sorted})
      }
    } catch (error) {
      next(error);
    }  
  });

// @desc    Get a single event
// @route   GET /:id
// @access  Public
router.get('/:id', async (req, res, next) => { 
  const {id} = req.params; 
  try {    
    const event = await Event.findById(id).populate('issues');
    if (event.length === 0) {
      res.status(200).json({ response: 'No event found in the database ' });
    } else {
      res.status(200).json({ data: event})
    }
  } catch (error) {
    next(error);
  }  
});

// @desc    Create an event
// @route   POST /
// @access  Public
  router.post('/', async (req, res, next) => {    
    const { universe, name, years, previousEvent, nextEvent, image, complementaryImages, description, summary } = req.body;
      try {
        const event = await Event.create({universe, name, years, previousEvent, nextEvent, image, complementaryImages, description, summary});
        res.status(201).json({ data: event })
      } catch (error) {
        next(error);
      }
    });

// @desc    Edit an event
// @route   PUT /:id
// @access  Public
    router.put('/:id', async (req, res, next) => {
      const { id } = req.params;     
      const { universe, name, years, previousEvent, nextEvent, image, complementaryImages, description, summary } = req.body;
        try {
          const updateEvent = await Event.findByIdAndUpdate(id, {universe, name, years, previousEvent, nextEvent, image, complementaryImages, description, summary}, { new: true });
          res.status(201).json({ data: updateEvent })
        } catch (error) {
          next(error);
        }
      });

// @desc    Delete an event
// @route   DELETE /:id
// @access  Public
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await Event.findByIdAndDelete(id);
    res.status(202).json({ data: deleted });
  } catch (error) {
    next(error);
  }

});


  module.exports = router;