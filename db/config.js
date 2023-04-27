const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect(process.env.URI)
        console.log("DB connected")

    }catch(error){
console.log(error)
    }
}
module.exports = {
    connect,
}