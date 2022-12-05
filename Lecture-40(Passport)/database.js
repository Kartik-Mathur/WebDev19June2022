const mongoose = require('mongoose');
const { Schema } = mongoose;
const connection = mongoose.connect('mongodb://localhost:27017/mydb');

const UserSchema = new Schema({
    username: String,
    password: String
})

const Users = mongoose.model('Users',UserSchema);

module.exports = Users;