const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    image: {
        type: Buffer,
        require: true,
    },
    user_id: {
        type: String,
        require: true,
    },
    posted_by: {
        type: String,
        require: true,
    },
    save: {
        type: [String],
        require: true,
    },
    comments: {
        type: [String],
    },
    comment_name: {
        type: String,
        require: true,
    }
})
const pin = mongoose.model("pin", UserSchema);
module.exports = pin;