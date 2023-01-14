const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/belt_exam_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Successfully established connection to the database using mongoose!!"))
    .catch(err => console.log("Oh No! Something went wrong when trying to connect to the database using mongoose!", err));