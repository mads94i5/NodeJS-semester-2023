import express from "express";
const app = express();
import path from "path";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage/home.html"));
})



const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port:", PORT));