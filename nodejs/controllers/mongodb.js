const commentServices = require('../services/mongodb.services.js');
const { ObjectId } = require('mongodb');

async function getComments(req, res) {
  let allComments = await commentServices.findComments()
  res.json(allComments)
}

async function getComment(req, res) {
  if (ObjectId.isValid(req.params.id)) {
    let comment = await commentServices.findComment(req.params.id)
    res.json(comment)
  } else {
    res.status(404).send("Not Found")
  }
}

function postComments(req, res) {
  const { name, text } = req.body;
  const data = Date();
  commentServices.insertComment({ name, text, data});
  res.json()
}

module.exports = {
  getComments,
  postComments,
  getComment
}