const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mongodb-basic");

//Schema --> Document Structe --> Document Look And Data Validation
let UserSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
});

module.exports = mongoose.model('user', UserSchema);