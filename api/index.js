const express = require("express");
app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connection Successful!!!"))
    .catch((err) => {
        console.error(err);
    });
app.listen(5000, () => {
    console.log("Listening on Port 5000");
});
