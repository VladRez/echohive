const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    trackname: {
        type: String,
        required: true
    },
    comment_ids: {
        type: Array,
        default: []
    },
    src_url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Track = mongoose.model('Track', TrackSchema);


// user_id, track_name, description(optional), comment_ids, src_url, 