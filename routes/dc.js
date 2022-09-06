const router = require('express').Router();
const MainBlock = require ('../models/MainBlock');

// @desc    Get all DC parts
// @route   GET /
// @access  Public
router.get('/:universe/parts', async (req, res, next) => {
  const { universe } = req.params;
    try {
      const parts = await MainBlock.find({universe: universe, type:"part"});
      if (parts.length === 0) {
        res.status(200).json({ response: 'No DC parts found in the database ' });
      } else {
        res.status(200).json({ data: parts })
      }
    } catch (error) {
      next(error);
    }  
  });

// @desc    Get one DC part
// @route   GET /
// @access  Public
router.get('/parts/:part', async (req, res, next) => {
  const {part} = req.params
  try {
    const singlePart = await MainBlock.find({universe: "DC", name:`${part}`});
    if (singlePart.length === 0) {
      res.status(200).json({ response: 'No part detail found in the database ' });
    } else {
      res.status(200).json({ data: singlePart })
    }
  } catch (error) {
    next(error);
  }  
});

// @desc    Get all event from a specific part
// @route   GET /
// @access  Public
router.get('/events/:event', async (req, res, next) => {
  const {event} = req.params
  try {
    const singleEvent = await MainBlock.find({universe:"DC", name:`${event}`});
    if (singleEvent.length === 0) {
      res.status(200).json({ response: 'No part detail found in the database ' });
    } else {
      res.status(200).json({ data: singleEvent })
    }
  } catch (error) {
    next(error);
  }  
});



  module.exports = router;
