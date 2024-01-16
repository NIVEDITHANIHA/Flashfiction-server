/* ----------------------------------FlashFiction user Registration Starts here------------------------------------------------------------------------------- */
const flashusers = require("../model/fictiomuserSchema")
/* logical function */
exports.fictionregister = async (req, res) => {
    console.log("registered function");

    /* extract the data from the requrest body i- in index.js json data in to javascript objects */
    const { username, email, password } = req.body
    try {
        const existinguser = await flashusers.findOne({ email: email })
        if (existinguser) {

            res.status(406).json("Already existing User....Login")

        }
        else {
            const newflashusers = new flashusers({
                username: username,
                email: email,
                password: password,
                bio: "",
                profile: ""
            })
            /* save function in mongoosse - to permennnantly store the data in mongodb */
            await newflashusers.save()
            res.status(200).json(newflashusers)
        }
    }
    catch (err) {
        res.status(401).json(err)

    }
}
/* ----------------------------------FlashFiction user Registration ends here------------------------------------------------------------------------------- */
/* install npm i jsonwebtoken for Authorization */
/* import  jsonwebtoken for Authorization */
/* to generate  The token  use jwt.sign */
const jwt = require("jsonwebtoken")
exports.fictionlogin = async (req, res) => {
    console.log("loginFunction");

    const { email, password } = req.body
    try {
        existedUser = await flashusers.findOne({ email: email, password: password })
        if (!existedUser) {
            res.status(406).json("User Not registerd...register")

        } else {
            // a )first argument in jwt is data send inside the token & second is based on which token is generaated

            const token = jwt.sign({ userid: existedUser._id }, "superUserToken")
            res.status(200).json({
                existedUser: existedUser,
                token: token
            })

        }

    }
    catch (err) {
        res.status(401).json(err)
    }
}




/* ----------------------------------FlashFiction user Login Starts here------------------------------------------------------------------------------- */

exports.editProfileuser = async (req, res) => {

    const userId = req.payload
    console.log(userId);

    const { username, email, password, bio, profile } = req.body
    console.log(req.body);

    const existedprofile = req.file ? req.file.filename : profile
    console.log(existedprofile);

    try {
        const editedProfile = await flashusers.findByIdAndUpdate({ _id: userId }, { username, email, password, bio, profile: existedprofile }, { new: true })

        await editedProfile.save()
        res.status(200).json(editedProfile)


    }
    catch (err) {
        res.status(401).json(err)
    }
}


/* ----------------------------------FlashFiction user EDIT Starts here------------------------------------------------------------------------------- */