const express = require("express");
const router = express.Router();

const upload = require("../../services/file-upload");

const singleUpload = upload.single("track");

router.post("/track-upload", (req, res) => {
  singleUpload(req, res, err => {
    return res.json({ src_url: req.file.location });
  });
});

module.exports = router;
