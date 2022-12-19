const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type : String,
        required: true,
        unique: true,
        trim : true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps:{
    createdAt: 'documentCreatedAt',
    updatedAt: 'documentUpdatedAt'
}})


module.exports = mongoose.model("User",userSchema);