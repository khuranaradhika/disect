const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const Charity = require("../models/Charity")

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        /* Uncommment to see charity being pulled from database
        let C = await Charity.findOne({"category": "Environmentally Friendly"})
        console.log("First charity found in DB: " + C.name)
        */
        console.log('MongoDB Connected...');
    } catch (err) {
        //console.log("failed");
        console.error(err.message);
        console.log("err");
        // exit process with failure

    }
};

module.exports = connectDB;
