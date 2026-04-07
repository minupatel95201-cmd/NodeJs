const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const userModel = require("./Model/user.model");
const bcrypt = require("bcrypt");
// server memory temporary
// user ni9 req server pase jay tyare server ne user kon che te khabar hoti nathi, mate darek req sathe user ne authorizekarvo paqde che

// user req --> (cheack image into folder)

// ex. login req --> server ne khabar nathi hoti user kon che
// cookie parser --> save token into browser storage
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());


app.get("/", (req, res)=>{
    res.cookie("username", "test@user");
    res.send("Server HomePage");
});

// data -->  convert jwt --> save cookie
app.get("/jwt", (req, res)=>{
   let data ={username: "test", email:"test@gmail.com", role: "admin"};
   let token = jwt.sign(data, "aabbccdd");
   console.log(token);

   res.cookie("token", token);
   res.send("go to application and check cokkie storage");
});

// signup
app.get("/signup", async (req, res)=>{
let createdUser = await  userModel.create({
        username: "test_user",
        email: "test@gmail.com",
        password: "teat123",
    });
    res.send(createdUser);
});

//for encrypt your password use --> bcrypt package
// use case : when your data leack password is safe, if you encrypt your all user password
// encrypt password stages: 
// your password + salt (default random 10 chr) --> craete a hash
// in databash we save hash not password

app.get("/hash", (req, res)=>{
    let password = "abc@123";
  //  bcrypt.hash("password", "number", (error, hash)-->{})
    bcrypt.hash(password, 10, (err, hash)=>{
       console.log(hash);
       res.send(hash);
    });
});
//login -- password compare (user system )



app.listen(5000, ()=>{
    console.log("Server Is Ruuning...🏃‍♀️");
});