
class ApiFeatures{
    constructor(query,queryStr){
        this.query=query,
        this.queryStr=queryStr
    }
    
    // creating serach functionality
    search() {
    const keyword=this.queryStr.keyword?{
        name:{
            $regex:this.queryStr.keyword,
            $options:"i"
        }
    }:{}

        console.log(keyword)
       this.query=this.query.find({...keyword})
       return this
    }
}

module.exports=ApiFeatures