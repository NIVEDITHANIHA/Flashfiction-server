const flashfictions = require("../model/flashfictionSchema")


/* to add A post Functionality using POST API ,MULTER for FORMDATA() & JWT Middleware--------------- */

exports.fictionStories = async (req, res) => {
    console.log("Fiction started");
    const userId = req.payload
    console.log(userId);
    const fictionImage = req.file.filename
    console.log(fictionImage);
    const { fictionTitle, fictionDate, fictionContent } = req.body
    console.log(req.body);

    try {
        const existingFiction = await flashfictions.findOne({ fictionTitle: fictionTitle })
        if (existingFiction) {
            res.status(406).json("Existing Title..!!")
        } else {
            const newflashfictions = new flashfictions({
                fictionTitle: fictionTitle,
                fictionDate: fictionDate,
                fictionContent: fictionContent,
                fictionImage: fictionImage,
                user_id: userId
            });

            await newflashfictions.save()
            res.status(200).json(newflashfictions)


        }

    }
    catch (err) {
        res.status(401).json(err)
    }







}

/* ----------------------for retriving GET API--------------------------------------------- */

exports.getfictionStories = async (req, res) => {
    try {
        const allGetApi = await flashfictions.find()
        res.status(200).json(allGetApi)

    }
    catch (err) {
        res.status(401).json(err)
    }
}


exports.getUserfictionStories = async (req, res) => {
    userId = req.payload
    try {
        const userStorieApi = await flashfictions.find({ user_id: userId })
        res.status(200).json(userStorieApi)

    }
    catch (err) {
        res.status(401).json(err)
    }
}

/* to add A post Functionality using PUT API ,MULTER for FORMDATA() & JWT Middleware--------------- */

exports.editUserFictionStories = async (req, res) => {
    const { id } = req.params
    console.log(id);

    const userId = req.payload
    console.log(userId);

    const { fictionTitle, fictionDate, fictionContent, fictionImage } = req.body
    console.log("body", fictionTitle, fictionDate, fictionContent, fictionContent);

    const existedImage = req.file ? req.file.filename : fictionImage
    console.log(existedImage);

    try {
        const editUSerSpecificfiction = await flashfictions.findByIdAndUpdate({ _id: id }, { fictionTitle, fictionDate, fictionContent, fictionImage: existedImage, user_id: userId }, { new: true })
        await editUSerSpecificfiction.save()
        res.status(200).json(editUSerSpecificfiction)

    }
    catch (err) {
        res.status(401).json(err)

    }


}

exports.deletefictionStories = async (req, res) => {
    console.log("Deleted Function Starts");
    const { id } = req.params
    console.log(id);
    try {

        const deleteUSerProjects = await flashfictions.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteUSerProjects)

    }
    catch (err) {
        res.status(401).json(err)

    }

}



