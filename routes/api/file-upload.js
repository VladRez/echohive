const express = require("express");
const router = express.Router();

const upload = require("../../services/file-upload");

const singleUpload = upload.single("track");
const singleUploadImage = upload.single("image");

const uploadData = upload.fields([
  { name: "track" },
  { name: "image" }
]);

router.post("/", (req, res) => {
  // console.log(req);
  // console.log(res);
  uploadData(req, res, err => {
    if (err) {
      return res
        .status(422)
        .send({
          errors: [{ title: "File Upload Error", detail: err.message }]
        });
    }
    return res.json({ src_url: req.files.track[0].location, img_src_url: req.files.image[0].location });
  });
});
 
router.post("/upload-image/", (req, res) => {
  singleUploadImage(req, res, err => {
    if (err) {
      return res
        .status(404).
        send({
          errors: err.message
        });
    }
    return res.json({ img_src_url: req.file.location });
  });
});

module.exports = router;
