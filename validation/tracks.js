const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTrackInput(data) {
    let errors = {};

    data.trackname = validText(data.trackname) ? data.trackname : '';
    data.src_url = validText(data.src_url) ? data.src_url : '';

    // if (!Validator.isLength(data.trackname, { min: 1})) {
    //     errors.text = 'Track must be at least 1 character';
    // }

    if (Validator.isEmpty(data.trackname)) {
        errors.text = 'Trackname field is required';
    }

    if (Validator.isEmpty(data.src_url)) {
        errors.text = 'Source_url field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};