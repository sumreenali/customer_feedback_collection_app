const mongoose = require('mongoose');
const { Schema } = mongoose; //import schema from mongoose as const schema ES6 

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users',userSchema);