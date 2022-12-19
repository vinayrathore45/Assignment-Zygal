const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const textSchema = new mongoose.Schema({

    userId : {
        type : ObjectId,
        ref : "User",
        required: true
    }, 
     content : {
        type : String,
        required : true
     }

},{timestamps:{
    createdAt: 'documentCreatedAt',
    updatedAt: 'documentUpdatedAt'
}})


module.exports = mongoose.model("Text",textSchema);