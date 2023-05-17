const express = require('express');
const app = express();
const morgan = require('morgan'); // Logger
require("dotenv").config();
const bodyParser = require("body-parser");

// connect to the DB mongoDB
require("./config/db.config");

// bring in routes
const postRoutes = require('./routes/post.js')

// * Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use('/', postRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => { 
    console.log(`A Node Js API is listening on port : ${port} ` )
});