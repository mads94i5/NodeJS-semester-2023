const express = require("express");
const app = express();

// Local time String
console.log("Date():", Date());
// UTC
console.log("new Date():", new Date());
// Epoch timestamp / Unix. The number output is seconds since Jan 1 1970.
console.log("Date.now():", Date.now());

// task: Create a route that returns date
app.get("/date", (req, res) => {
  res.send({ message: new Date() });
});

// task: create a route that returns the current month
app.get("/month", (req, res) => {
  const currentMonth = new Date().toLocaleDateString("en-US", { month: "long" });
  res.send({ data: currentMonth });
});

// task: create a route that returns the current day
app.get("/day", (req, res) => {
  const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" });
  res.send({ data: currentDay });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
