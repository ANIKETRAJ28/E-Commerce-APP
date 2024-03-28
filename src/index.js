const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { connect } = require("./config/databaseConfig");
const apiRoute = require("./routers/index");
const passport = require("passport");
const { passportAuth } = require("./middlewares/jwt-middleware");

const SetupServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use("/api", apiRoute);
    app.use(passport.initialize());
    passportAuth(passport);
    
    app.listen(PORT, async() => {
        console.log(`Server running at port ${PORT}`);
        await connect();
        console.log("mongodb connected");
    });
}

SetupServer();