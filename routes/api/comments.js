const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");

router.post("/", (req, res) => {
  const newComment = new Comment({
    user: req.body.user_id,
    body: req.body.comment_body,
    track: req.body.track
  });

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
  Comment.findById(req.params.id)
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
