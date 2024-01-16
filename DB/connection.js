
/* import MAngoose  */
const mongoose = require("mongoose")

const connectionString = process.env.database

mongoose.connect(connectionString).then((res)=>{
    console.log("Mangoose connected successfully");
}).catch((err)=>{
    console.log(`mangoose failedd to connnect due to  an ${err}`);

})