const mongoose = require("mongoose")
const flashfictionSchema = new mongoose.Schema({

    fictionTitle: {
        type: String,
        require: true
    },
    fictionDate: {
        type: String,
        require: true
    },
    fictionContent: {
        type: String,
        require: true
    },
    fictionImage: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    }

})
const flashfictions = mongoose.model("flashfictions", flashfictionSchema)
module.exports = flashfictions
