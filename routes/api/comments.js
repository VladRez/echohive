const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");
// const passport = require('passport');


router.post("/", (req, res) => {
        // passport.authenticate('jwt', { session: false }),
  const newComment = new Comment({
    user: req.body.user,
    body: req.body.body,
    track: req.body.track
  });
console.log(newComment); //for testing
  newComment
    .save()
    .then(comment => {
      return res.json(comment);
    })
    .catch(err => {
      return res.status(422).json({ error: err });
    });
});

router.get("/:id", (req, res) => {
  Comment.find({track: req.params.id})
    .then(comment => {
      res.json(comment);
    })
    .catch(err => {
      return res.status(422).json({ error: err });
    });
});

router.get("/", (req, res) => {
  Comment.find().then(comments => {
    res.json(comments);
  });
});

module.exports = router;
