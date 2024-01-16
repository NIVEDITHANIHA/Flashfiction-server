/* import mongoose -------------------------- */
const mongoose = require("mongoose")
const fictiomuserSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    bio: {
        type: String,
    },
    profile: {
        type: String,
    }




})
/*fictionusers===>Collection name  */
const flashusers = mongoose.model("flashusers", fictiomuserSchema)


module.exports = flashusers
