const express=require("express")
const { saveUserData, getSaveData, deleteUser } = require("../controllers/usersData.controllers")

const userRouter=express.Router()

userRouter.post("/userDataSave",saveUserData)
userRouter.get("/allData",getSaveData)
userRouter.delete("/delete/:id",deleteUser)

module.exports=userRouter