const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("./Model/user.model");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const postModel = require("./Model/post.model");
const path = require("path");
const upload = require("./Configs/Multer");
const morgan = require("morgan");

//image folder--> image --> aa.jpg(laptop)
//my pic folder --> image --> aa.jpg(mobile)

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

//frontend logic
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/profile", auth, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email }).populate("posts");
    res.render("profile", { user });
});

app.get("/post", (req, res) => {
    res.render("post");
});

app.get("/editprofile", auth, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email });

    res.render("editprofile", { user });
});

//backend logic + database logic
//signup user --> create a new user
app.post("/create", (req, res) => {
    let { fullname, username, email, phone, password, image } = req.body

    bcrypt.hash(password, 10, async (err, hash) => {
        try {
            await userModel.create({
                fullname,
                username,
                email,
                phone,
                password: hash,
                image,
            });
        } catch (err) {
            res.send(err);
        }
    });
    res.redirect("/");
});



// login user --> check email and password, redirect to profile page
app.post("/login", async (req, res) => {

    let user = await userModel.findOne({ email: req.body.email });

    if (!user) {
        res.send("Something Went Wrong - Email")
    } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {

                let token = jwt.sign({ email: user.email }, "aabbccdd");

                res.cookie("token", token);

                res.redirect("/profile");
            } else {
                res.send("Something Went Wrong");
            }
        });
    }

});

// logout user --> remove token from cookie
app.get("/logout", (req, res) => {
    res.clearCookie();
    res.redirect("/");
});

//create post
app.post("/post", auth, upload.single('imgurl'), async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email });

    let { title, description} = req.body;
    console.log(req.file);
    let createPost = await postModel.create({
        userId: user._id,
        title,
        description,
        imgurl: req.file.filename,
    });

    // add (push) posts into user data
    user.posts.push(createPost);
    await user.save();

    res.redirect("/profile");
});

//edit profile
app.post("/edit", auth, async (req, res)=>{
    let {fullname, username, email, phone, image} = req.body;
   await userModel.findOneAndUpdate({email: req.user.email}, {fullname, username, email, phone, image}, {new: true});
   res.redirect("/profile");
});

//delete 
app.get("/delete/:id", auth, async(req, res)=>{
  let user = await userModel.findOne({email: req.user.email});

await postModel.findOneAndDelete({_id: req.params.id});

  let postNumber = user.posts.indexOf(req.params.id);

  user.posts.splice(postNumber, 1);
  await user.save();

  res.redirect("/profile");
});

//Middleware Function
function auth(req, res, next) {
    let token = req.cookies.token;
    if (!token) {
        res.send("Access Denied !!!")
    }

    try {
        let verified = jwt.verify(token, "aabbccdd");
        req.user = verified // this sent into next route(check profile route, you can access email llike req.user.email)  
        next();
    } catch (error) {
        console.log("Invaild Token");
    }
}

app.listen(3000, () => {
    console.log('server id running...🏃‍♀️');
});