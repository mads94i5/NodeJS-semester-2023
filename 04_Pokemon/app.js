import express from "express";
const app = express();
import path from "path";
import { battlePokemon } from "./public/assets/scripts/battlepokemon.js";

app.use(express.static("public"));

// ############### HTML ###############

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/pages/frontpage/home.html"));
});

app.get("/battle", (req, res) => {
    res.sendFile(path.resolve("./public/pages/battle/battle.html"));
});


app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("./public/pages/contact/contact.html"));
});

// ############### Routes ###############

app.get("/proxyserver", (req, res) => {
    fetch("http://www.google.com/")
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP Error!");
            }
            return response.text();
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        })
});

app.get("/battlepokemon", async (req, res) => {
    res.send({ data: await battlePokemon() });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port:", PORT));