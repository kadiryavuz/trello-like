const { model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: String,
    passOTP: String,
    email: String,
    createdAt: String,
    passOTPCreatedAt: String

})

module.exports = model('User', userSchema);