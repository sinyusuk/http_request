var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    completedAt:{
        type:Date,
        default:new Date()
    }
});

module.exports = {Todo};