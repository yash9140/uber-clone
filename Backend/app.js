const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db.js");

connectToDb();

app.use(cors());

app.get("/", (req,res) => {
    res.send("Hello World");
});

module.exports = app;