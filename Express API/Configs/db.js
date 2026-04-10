const mongoose = require("mongoose");
// const dbgr = require("debug");
// const config = require("config");

function connenctTodb() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Mongodb Connected");
        })
        .catch((err) => {
            console.log(err);
        })
}



// function connenctTodb() {
//     mongoose.connect(`${config.get("MongoDB_URL")}/ecommerce`)
//         .then(() => {
//             dbgr("Mongodb Connected");
//         })
//         .catch((err) => {
//             dbgr(err);
//         })
// }

module.exports = connenctTodb