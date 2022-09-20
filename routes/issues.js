const router = require('express').Router();
const Issue = require ('../models/Issue');
const fileUploader = require('../config/cloudinary.config');

// @desc    Get all DC and Marvel issues
// @route   GET /
// @access  Public
router.get('/', async (req, res, next) => {  
    try {
      const issues = await Issue.find({});
      if (issues.length === 0) {
        res.status(404).json({ response: 'No issues found in the database ' });
      } else {
        const sorted = [...issues].sort((a,b) => a.order - b.order);
        res.status(200).json({ data: sorted})
      }
    } catch (error) {
      next(error);
    }  
  });

// @desc    Get a single issue
// @route   GET /:id
// @access  Public
router.get('/:id', async (req, res, next) => { 
  const {id} = req.params; 
  try {
    const issue = await Issue.findById(id);
    if (issue.length === 0) {
      res.status(404).json({ response: 'No issues found in the database ' });
    } else {
      res.status(200).json({ data: issue})
    }
  } catch (error) {
    next(error);
  }  
});

// @desc    Create an issue
// @route   POST /
// @access  Public
  router.post('/', async (req, res, next) => {    
    const { universe, name, years, image, complementaryImages, description, summary } = req.body;
      try {
        const issue = await Issue.create({universe, name, years, image, complementaryImages, description, summary});
        res.status(201).json({ data: issue })
      } catch (error) {
        next(error);
      }
    });

// @desc    Edit an issue
// @route   PUT /:id
// @access  Public
    router.put('/:id', async (req, res, next) => {
      const { id } = req.params;     
      const { universe, name, years, image, complementaryImages, description, summary } = req.body;
        try {
          const updateIssue = await Issue.findByIdAndUpdate(id, {universe, name, years, image, complementaryImages, description, summary}, { new: true });
          res.status(201).json({ data: updateIssue })
        } catch (error) {
          next(error);
        }
      });

// @desc    Delete an issue
// @route   DELETE /:id
// @access  Public
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await Issue.findByIdAndDelete(id);
    res.status(202).json({ data: deleted });
  } catch (error) {
    next(error);
  }

});


  module.exports = router;