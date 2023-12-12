const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/jwt');
const ReadStatus = require('../models/ReadStatus');

// @desc    Get the read status for all issues for a user
// @route   GET /read-statuses
// @access  Private
router.get('/read-statuses', isAuthenticated, async (req, res, next) => {
  const userId = req.payload._id;

  try {
    const readStatuses = await ReadStatus.find({ userId: userId }).populate('issueId');
    res.status(200).json(readStatuses);
  } catch (error) {
    next(error); // Make sure you have error handling middleware to catch this
  }
});

// @desc    Toggle the read status of an issue
// @route   PATCH /toggle-read/:issueId
// @access  Private
router.patch('/toggle-read/:issueId', isAuthenticated, async (req, res, next) => {
  const userId = req.payload._id; // As above
  const { issueId } = req.params;

  try {
    let readStatus = await ReadStatus.findOne({ userId: userId, issueId: issueId });
    
    if (!readStatus) {
      // If no read status exists, create a new one and set it to read
      readStatus = await ReadStatus.create({
        userId: userId,
        issueId: issueId,
        isRead: true // Defaulting to true, as this is the first read
      });
    } else {
      // If a read status exists, toggle it
      readStatus.isRead = !readStatus.isRead;
      await readStatus.save();
    }

    res.status(200).json(readStatus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
