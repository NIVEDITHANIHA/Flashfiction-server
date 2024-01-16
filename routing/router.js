/* Import express -------------------------------*/
const express = require("express")
const fictionuserController = require("../controller/fictionuserController")
const flashfictionController = require("../controller/flashfictionsController")
const jwtMiddleware = require("../middleware/jwtmiddleware")
const multerConfig = require("../middleware/multerMiddleware")
/* import Router--------- Create an object for router() class in the express module------------------------- */
const router = new express.Router()



/* Registration Router  */
router.post('/flashusers/fictionregister', fictionuserController.fictionregister)

/* Login Router  */
router.post("/flashusers/fictionlogin", fictionuserController.fictionlogin)


/* flasStories Post Api */
router.post("/flashusers/stories", jwtMiddleware, multerConfig.single("fictionImage"), flashfictionController.fictionStories)

/* flasStories Get Api  Retrived*/
router.get("/flashusers/getstories", flashfictionController.getfictionStories)


/* flasStories userSpecific Get Api  Retrived*/
router.get("/flashusers/getuserstories", jwtMiddleware, flashfictionController.getUserfictionStories)



/* flasStories userSpecific Edit PUT API  Retrived*/
router.put("/flashusers/editstories/:id", jwtMiddleware, multerConfig.single("fictionImage"), flashfictionController.editUserFictionStories)

/* flashStories DELETE API */
router.delete("/flashusers/deletestories/:id", jwtMiddleware ,flashfictionController.deletefictionStories)


/* flashStories EDIT API */
router.put("/flashusers/profile" ,jwtMiddleware, multerConfig.single("profile"), fictionuserController.editProfileuser)
module.exports = router