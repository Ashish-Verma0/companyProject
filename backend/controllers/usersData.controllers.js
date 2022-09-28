const userDatabase=require("../model/userData.model")
const ApiFeatures = require("../utils/ApiFeatures")

const saveUserData=async(req,res)=>{
 const data=await userDatabase.create(req.body)

 res.status(201).json({
    succcess:true,
    data,
    status:201
 })

}

const getSaveData=async(req,res)=>{
    const apiFeatures=new ApiFeatures(userDatabase.find(),req.query).search()
 const getData=await apiFeatures.query

 res.status(200).json({
    succcess:true,
    getData
 })
}

const deleteUser=async(req,res)=>{
  const user=await userDatabase.findByIdAndDelete(req.params.id)

  if(!user){
    return res.status(404).json({
        message: "user not found",
        succcess:true
    })
  }

  res.status(200).json({
    success:true
  })
}
module.exports={
    saveUserData,getSaveData,deleteUser
}