const express=require("express")
const cors=require("cors")
const userRouter = require("./router/userData.router")

const app=express()
app.use(cors({
    origin:"http://localhost:3000",
    credential:true
}))
app.use(express.json())

app.use("/api/v1",userRouter)

app.get("/",(req,res)=>{
    res.send("hello world")
})

module.exports=app