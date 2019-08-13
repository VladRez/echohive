const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Track = require('../../models/Track');
const validateTrackInput = require('../../validation/tracks');

router.get('/', (req, res) => {
    Track.find()
        .sort({ date: -1 })
        .then(tracks => res.json(tracks))
        .catch(err => res.status(404).json({ notracksfound: 'No tracks found' }));
});

router.get('/user/:track_id', (req, res) => {
    Track.find({ user: req.params.track_id })
        .then(track => res.json(track))
        .catch(err =>
            res.status(404).json({ notrackfound: 'No track found' }
            )
        );
});

// router.get('/:id', (req, res) => {
//     Track.findById(req.params.id)
//         .then(track => res.json(track))
//         .catch(err =>
//             res.status(404).json({ notrackfound: 'No track found with that ID' })
//         );
// });


// copy pasted this, hopefully works with our auth

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTrackInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newTrack = new Track({
            trackname: req.body.trackname,
            src_url: req.body.src_url,
            user: req.user.id,
            comments: req.comments.id // 'comments' returns array containing object 
        });                           // containing all comments; so only 1 id needed?

        newTweet.save().then(tweet => res.json(tweet));
    }
);


module.exports = router;