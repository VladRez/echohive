// const express = require("express");
// const passport = require("passport");
// const validateTrackInput = require("../../validation/valid-track");


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// const s3Bucket = new AWS.S3({
//     accessKeyId: ACCESS_KEY,
//     secretAccessKey: SECRET_ACCESS_KEY,
//     region: "US West (N.California)"
// });

// router.post("/upload", upload.single("file"), (req, res) => {

//     const file = req.file;
//     const s3FileURL = process.

//           }
//             const newTrack = new Track({
//                   user: req.user.id,
//                   trackname: req.body.trackname,
//                   comment_ids: req.body.comment_ids,
//                   track: req.body.src_url,
//                   date: req.body.date
//                 });
//                 newTrack.save();
//               }
//             );
//             const params = {
//                 Bucket: 'echo-hive-dev',
//                 Key: file.trackname,
//                 Body: file.buffer,
//                 ContentType: file.mimetype,
//                 ACL: 'public-read'
//             };

//             module.exports = router;

// const soundfiles = [
//     "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3402+Euclid+Ave.mp3",
//     "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3404+Euclid+Ave+2.mp3",
//     "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3404+Euclid+Ave+3.mp3",
//     "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3402+Euclid+Ave+4.mp3",
//     "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3402+Euclid+Ave+5.mp3",
//     "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3402+Euclid+Ave+6.mp3"
// ];

// let sounds = soundfiles.forEach(src => (
//     <figure>
//      <figcaption>Listen some echoes:</figcaption>
//         <audio controls>
//                 <source src={src} type="audio/mpeg"></source>
//         </audio>
//     </figure>
// ))
