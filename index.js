//packages I need: express, nodemon, cookie-server, body-server,pug

const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/hello", (req,res)=>{
    res.render("hello");
});


app.post("/hello", (req,res)=>{
    console.log(req.body)
    res.redirect("/");
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("App is running on port: ", port);
});