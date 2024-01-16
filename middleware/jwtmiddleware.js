const jwt = require("jsonwebtoken")

const jwtMiddleware = (req, res, next) => {
    console.log("At middleWare");

    const Token = req.headers["authorization"].split(' ')[1]
    console.log(Token);
    try {

        const jwtresponse = jwt.verify(Token, "superUserToken")
        console.log(jwtresponse);
        req.payload = jwtresponse.userid
        console.log( req.payload);
        next();
    }
    catch (err) {
        res(406).json(err)
    }
}


module.exports = jwtMiddleware;


