

const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
app.use(cookieParser())
 
app.use(bodyParser.urlencoded({extended:true}));


app.set("view engine", "pug");

app.get("/", (req,res)=>{
    res.render("index", {name:req.cookies.name});
});

app.get("/hello", (req,res)=>{
    res.render("hello");
    console.log(req.body)

   
});




app.post('/hello', (req,res)=>{
    console.dir(req.body)
    res.cookie('name', req.body.name);
    res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("App is running on port: ", port);
});