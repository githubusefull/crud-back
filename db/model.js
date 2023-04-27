const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    confirmpassword:{
        type:String,
        require:true,
    },
});
module.exports = mongoose.model("Regiters", schema)