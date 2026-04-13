const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./Configs/db");
const cookieParser = require("cookie-parser");
//Routes
const userRouter = require("./Routes/web/v1/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser());
app.set(db());


//cors origin --> allow only that website that mention into origin group, ex. backend only res when localhost 3000 send requerst, other than give cors error
//localhost 3000 --> req --> accept --> give response
//localhost 3002 --> req --> --> cors error --> don't give response
// in origin you mention frontend urls( development, production both)
app.use(cors({ origin : "http://localhost:3500", credentials: true}));

PORT = process.env.PORT;

// temp route --> in backend we don't create a home route. after Testing / Development remove home route
app.get("/", (req, res)=>{
    res.status(401).json({message: "Access Denined !!"});
});

app.use("/user", userRouter); // localhost: 3000/ user/ register

app.listen(PORT, ()=>{
    console.log(`Server Is Running On ${PORT}`);
});