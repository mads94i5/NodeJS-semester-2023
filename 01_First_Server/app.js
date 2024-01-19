// import express
const express = require("express");
// instantiate express
const app = express();

// one-line
//const app = require("express")();

app.use(express.json());

const otherData = 123;

app.get("/", (req, res) => {
    res.send({ data: "Baby's first website", otherData: otherData });
});

// dog endpoint
const dogObject = { dog1: "Woof", dog2: "Vov" }

app.get("/dog", (req, res) => {
    res.send({ data: dogObject });
});

app.get("/dog/:id", (req, res) => {
    console.log(dogObject[req.params.id]);
    res.send({ data: dogObject[req.params.id] });
});

app.get("/cat", (req, res) => {
    console.log(req.query);
    res.send({ data: req.query });
});

let balance = 100;
app.get("/wallet/:withdrawalAmount", (req, res) => {
    if (balance < req.params.withdrawalAmount) {
        res.send({ message: "Not enough money" });
    } else {
        balance -= req.params.withdrawalAmount;
        res.send({ message: `You've withdrawn ${req.params.withdrawalAmount}`});
    }
});

app.post("/giveMeTheBody", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.get("/pirate", (req, res) => {
    res.send({ message: "yes" });
});

// 80 http
// 443 https
// 8080 http dev
// 9090 https dev

app.listen(8080);


// console.log(express)
// console.log(app)
