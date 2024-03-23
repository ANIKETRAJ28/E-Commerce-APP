const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { connect } = require("./config/databaseConfig");
const User = require("./models/user");

const SetupServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, async() => {
        console.log(`Server running at port ${PORT}`);
        await connect();
        console.log("mongodb connected");
    });
}

SetupServer();