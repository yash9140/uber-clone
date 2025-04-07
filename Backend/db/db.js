const mongoose = require("mongoose");


function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log("connect to MongoDb");
        })
        .catch(err => {
            console.error("Error connecting to MongoDB:", err);
        });
}

module.exports = connectToDb;