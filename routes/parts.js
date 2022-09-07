const router = require('express').Router();
const Part = require ('../models/Part');

// @desc    Get all DC or Marvel Parts
// @route   GET /
// @access  Public
router.get('/:universe', async (req, res, next) => { 
  const { universe } = req.params
  try {
    const parts = await Part.find({universe:universe});
    if (parts.length === 0) {
      res.status(200).json({ response: 'No parts found in the database ' });
    } else {
      res.status(200).json({ data: parts})
    }
  } catch (error) {
    next(error);
  }  
});

// @desc    Get a single part
// @route   GET /:id
// @access  Public
router.get('/:universe/:id', async (req, res, next) => { 
const {id} = req.params; 
try {    
  const part = await Part.findById(id).populate('events');  
  if (part.length === 0) {
    res.status(200).json({ response: 'No parts found in the database ' });
  } else {
    res.status(200).json({ data: part})
  }
} catch (error) {
  next(error);
}  
});

// @desc    Create a part
// @route   POST /
// @access  Public
router.post('/', async (req, res, next) => {    
  const { universe, name, years, description } = req.body;
    try {
      const part = await Part.create({universe, name, years, description});
      res.status(201).json({ data: part })
    } catch (error) {
      next(error);
    }
  });

// @desc    Edit a part
// @route   PUT /:id
// @access  Public
  router.put('/:id', async (req, res, next) => {
    const { id } = req.params;     
    const { universe, name, years, description } = req.body;
      try {
        const updatePart = await Part.findByIdAndUpdate(id, {universe, name, years, description}, { new: true });
        res.status(201).json({ data: updatePart })
      } catch (error) {
        next(error);
      }
    });

// @desc    Delete a part
// @route   DELETE /:id
// @access  Public
router.delete('/:id', async (req, res, next) => {
const { id } = req.params;
try {
  const deleted = await Part.findByIdAndDelete(id);
  res.status(202).json({ data: deleted });
} catch (error) {
  next(error);
}

});


module.exports = router;
