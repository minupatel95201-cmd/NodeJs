// ejs --> light weight template engine
// ejs --> you can write dynamic html with help of ejs

const express = require('express');
const app = express();
const port = 2500;
const fs = require('fs');

//If You Want To Read Frontend Data Then You Have To Must Add Below Two Lines :
app.use(express.json()); //--> Read Data From Body (Read All Json Type Data)
app.use(express.urlencoded({ extended: true })); // --> Read From Data Only

//Setup Ejs
app.set('view engine', 'ejs');
// if you Want To ejs Engine That create views folder

// ---------- Task File Generater ----------
app.get('/', (req, res) => {
    fs.readdir('./tasks', (e, files) => {
        if (e) throw error;
        res.render("index", { data: files })
    });
});

//method post --> data --> res.body

//method get --> data --> res.params

//cretae file (post)
app.post('/create', (req, res) => {
    // console.log(req);
    // 
    let data = `Title : ${req.body.title}\nDeatils:${req.body.details}`;

    //create file
    fs.writeFile(`./tasks/${req.body.title.split(" ").join("-")}.txt`, data, (e) => {
        if (e) throw error;
    });
    res.redirect("/");
});
//open file
app.get('/open/:filename', (req, res) => {
    fs.readFile(`./tasks/${req.params.filename}`, (e, data) => {
        if (e) throw error;
        res.render('file', {data : data});
    })

})
//edit file
app.get('/edit/:filename', (req, res)=>{
    let oldname = req.params.filename;
    res.render("edit", { oldname });
});

app.post("/rename", (req, res)=>{
    fs.rename(`./tasks/${req.body.old}`, `./tasks/${req.body.new}`, (e)=>{
        if (e) throw error;
    });
    res.redirect("/");
})

app.listen(port, () => {
    console.log('Server is Running...🏃‍♀️');
});