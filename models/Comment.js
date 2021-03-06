const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// require("mongoose-double")(mongoose);

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  username: {  //added this, still testing
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  track: {
    type: Schema.Types.ObjectId,
    ref: "tracks"
  },
  timestamp: {
    type: Number
  }
});

module.exports = Comment = mongoose.model("Comment", CommentSchema);
