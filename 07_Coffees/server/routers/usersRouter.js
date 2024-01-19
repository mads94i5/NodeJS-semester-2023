import { Router } from "express";
const router = Router();

router.get("/users", (req, res) => {
    console.log(req.path, " - ", req.session);
    if (!req.session?.username) {
        res.send({ data: "I don't know you."});
    } else {
        res.send({ data: `Your name is ${req.session.username}`});
    }
});

router.get("/users/register/:username", (req, res) => {
    console.log(req.path, " - ", req.session);
    req.session.username = req.params.username;
    res.send({ data: `Succesfully registered ${req.params.username}`});
});

router.get("/users/logout", (req, res) => {
    // req.session.username = undefined;
    // delete req.session.username;
    req.session.destroy(() => {
        res.send({ data: "You are logged out" });
    })
});

export default router;
