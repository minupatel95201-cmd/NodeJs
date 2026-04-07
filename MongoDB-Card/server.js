const express = require('express');
const app = express();
const userModel = require('./Models/User.Model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('index');
});

//Craete card
app.post("/create", async (req, res) => {
   let { fname, uname, email, img } = req.body;
   // let fname = req.body.fname;
   // let uname = req.body.uname;
   // let email = req.body.email;
   // let img = req.body.img;


   await userModel.create({
      fullname: fname,
      username: uname,
      email: email,
      image: img,
   });
   res.redirect("/card");
});

//read Card
app.get('/card', async (req, res) => {
   let Alluser = await userModel.find();
   res.render("card", { data: Alluser });
});

//Delete
app.get("/delete/:id", async (req, res) => {
   await userModel.findOneAndDelete({ _id: req.params.id });

   res.redirect("/card");
});

//edit Card
// 1. Show Old Data --> Show Fild Form
app.get("/show/:id", async (req, res) => {
   let user = await userModel.findOne({ _id: req.params.id });
   res.render("edit", { user });
});

// 2. Set New Data --> Edit Form And Submit
app.post("/edit/:id", async (req, res) => {
   let { fname, uname, email, img } = req.body;

  await userModel.findOneAndUpdate({ _id: req.params.id }, { fullname: fname, username: uname, email, image: img }, { new: true });

  res.redirect("/card");
});

app.listen(5000, () => {
   console.log('server is running...🏃‍♀️');
});