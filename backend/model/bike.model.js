const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    location:{type:String,required:true},
    price:{type:Number,required:true},
    availableTime:{type:Number,required:true},
    available:{type:Boolean,required:true},
})


const Bike = mongoose.model("bike",bikeSchema);



module.exports = Bike