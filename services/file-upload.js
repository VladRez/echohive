// const router = express.Router();
// const Track = require("../../models/Track");
// const app = express();

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-S3");
const ACCESS_KEY = require("../config/keys").AWS_ACCESS_KEY;
const SECRET_ACCESS_KEY = require("../config/keys").AWS_SECRET_ACCESS_KEY;

aws.config.update({
  secretAccessKey: SECRET_ACCESS_KEY,
  accessKeyId: ACCESS_KEY,
  region: "us-east-2"
});
var s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "audio/mp3" ||
    file.mimetype === "audio/.wav" ||
    file.mimetype === "audio/.flac"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only MP3, WAV and FLAC allowed" + file.mimetype), false);
  }
};

var upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: "echo-hive-dev",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
