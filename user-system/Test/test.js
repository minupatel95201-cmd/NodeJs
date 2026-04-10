const autocannon = require("autocannon");
const url = "http://localhost:3000"; // route
const duration = "10"; // 10 second

const instance = autocannon({
    url,
    duration
},
    (err, results) => {
        if (err) {
            console.log("server test fail: ", err);
        } else {
            console.log("server test results:");
            console.log(results);
        }
    }
);
autocannon.track(instance);