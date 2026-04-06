const express = require('express');
const app = express();
const userModel = require('./Model/user.model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.send("Server HomePage");
});

// CRUD
// Create
app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        username: 'test1',
        name: 'test1 user',
        email: 'test1@gmail.com',
    });
    res.send(createdUser);
});

//Read
// all user Data
app.get('/all', async (req, res) => {
    let allUsers = await userModel.find();
    res.send(allUsers);
});
// Specific User -- frist only
app.get('/read', async (req, res) => {
    let user = await userModel.findOne({ username: "test1" });
    res.send(user);
});

// all user based on query
app.get('/user', async (req, res) => {
    let userData = await userModel.find({ username: "test1" });
    res.send(userData);
});

//Update
app.get('/update', async (req, res) => {
 let updateUser = await userModel.findOneAndUpdate(
        { username: 'test1' }, // find query --> what is find
        {username : 'Coder', email: 'coder@devloper.com'}, // update query --> what is change
        { new: true });
        res.send(updateUser);
});


//Delete
app.get("/delete", async (req, res)=>{
   await userModel.findOneAndDelete({username: "Coder"});
   res.redirect("/all");
});


app.listen(5000, () => {
    console.log("Server Is Running...🏃‍♀️");
});