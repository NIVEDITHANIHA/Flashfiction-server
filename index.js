/* import Dotenv ------------------------------------------*/

require("dotenv").config()

/* import express ----------------------------------------*/
const express = require('express')

/* import cors -------------------------------------------*/
const cors = require("cors")

/* import router -------------------------------------------*/
const router = require("./routing/router")

/* impport connection pagge-------------------------------- */
require('./DB/connection')
/* create seerver usinng express -------------------------*/
const fictionServer = express();

/* use of cors by server ---------------------------------*/
fictionServer.use(cors())

/* use of json server -------------------------------------*/
fictionServer.use(express.json())
/* use of router by server ---------------------------------*/

fictionServer.use(router)
/* uploads to finnd in browser ---------------------------*/

fictionServer.use('/uploads', express.static('./uploads'))
/* create a port  -----------------------------------------*/
const PORT =  process.env.PORT || 4000

/* run the server using the port ---------------------------*/
fictionServer.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
})


// fictionServer.get('/', (req, res) => {
//     res.send(`<h1>helooo iam niveditha</h1>`)
// })