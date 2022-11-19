const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/userdetails');

const UserSchema = new Schema({
    username: String,
    password: String
})

const Users = mongoose.model('Users',UserSchema);

module.exports = Users;