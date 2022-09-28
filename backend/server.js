const app = require("./app");
const connectDatabse = require("./config/Database");
require('dotenv').config();

const port=process.env.PORT || 8083

const startServer=()=>{
     connectDatabse()
    app.listen(port,()=>{
        console.log(`server is listening on ${port}`)
    })
}

startServer()