const db = require('../models')
const Issue = db.issue
const Op = db.Sequelize.Op

// Create and Save a new Issue
exports.createIssue = (req, res) => {
  // Validate request
  if (!req.body.issue) {
    res.status(400).send({
      message: 'Issue can not be empty!',
    })
    return
  }

  // Create a Issue
  const issue = {
    Email: req.body.email,
    newsId: req.body.nId,
    Issue: req.body.issue,
  }

  // Save Issue in the database
  Issue.create(issue)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Issue.',
      })
    })
}

exports.findAllIssues = (req, res) => {
  Issue.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Issues.',
      })
    })
}
