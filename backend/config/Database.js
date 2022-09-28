const mongoose=require("mongoose")

mongoose.connection.once("open",()=>{
    console.log("database connected")
})

mongoose.connection.on('err',()=>{
 console.log("databse not connected")
})

const connectDatabse=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports=connectDatabse