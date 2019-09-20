const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");

router.post("/", (req, res) => {
  const newComment = new Comment({
    user: req.body.user,
    username: req.body.username, 
    body: req.body.body,
    track: req.body.track
  });
  newComment
    .save()
    .then(comment => {
      return res.json(comment);
    })
    .catch(err => {
      console.log(err);
      return res.status(422).json({ error: err });
    });
});

router.get("/:id", (req, res) => {
  Comment.find({ track: req.params.id })
    .then(comment => {
      res.json(comment);
    })
    .catch(err => {
      return res.status(422).json({ error: err });
    });
});

//when is this used?
// router.get("/", (req, res) => {
//   Comment.find().then(comments => {
//     res.json(comments);
//   });
// });

module.exports = router;
