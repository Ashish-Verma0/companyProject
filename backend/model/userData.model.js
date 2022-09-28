const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    symbol:{
        type:String,
        required:true
    },
    marketPrice:{
        type:Number,
        required:true
    },
    currentPrice:{
        type:Number,
        required:true
    }
})

module.exports= mongoose.model("userDatabase",userSchema)