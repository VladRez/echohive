const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const upload = require("../../services/file-upload");

const Track = require("../../models/Track");
const validateTrackInput = require("../../validation/tracks");

router.get("/", (req, res) => {
  Track.find()
    .sort({ date: -1 })
    .then(tracks => res.json(tracks))
    .catch(err => res.status(404).json({ notracksfound: "hello" }));
});

router.get("/users/:user_id", (req, res) => {
  Track.find({ user: req.params.user_id })
    .then(tracks => res.json(tracks))
    .catch(err => res.status(404).json({ notracksfound: "hello" }));
});

router.get("/:id", (req, res) => {
  Track.findById(req.params.id)
    .then(track => res.json(track))
    .catch(err => res.status(404).json({ notrackfound: "No track found" }));
});

router.patch("/:id", (req, res) => {
  track = Track.findById(req.params.id);
  if (req.body.comment_id) {
    track
      .update({ $push: { comment_ids: req.body.comment_id } })
      .then(updatedTrack => res.json(updatedTrack));
  }
});

//deleteTrack//
// router.delete("/:id", (req, res) => {
//   if (req.body.track_id) {
//     Track.findByIdAndRemove(req.params.id);
//   }
// });

router.post("/", (req, res) => {
    const newTrack = new Track({
      trackname: req.body.trackname,
      src_url: req.body.src_url,
      img_src_url: req.body.img_src_url,
      user: req.body.user,
      username: req.body.username
    });

    newTrack.save().then(track => res.json(track));
  });


module.exports = router;
