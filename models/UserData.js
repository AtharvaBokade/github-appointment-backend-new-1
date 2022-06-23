const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    
    reason:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    time:{
        type:String,
        require:true,

    },
    approve:{
      
        type:String,
        default:"Not Approved",
    },

    email_send:{
        type:String,
        default:"Not Elligible"
    },
    
});

const Data = mongoose.model("Data",userSchema);
module.exports = Data;