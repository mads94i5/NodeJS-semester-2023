import { Router } from "express";
const router = Router();

function butler(req, res, next) {
    console.log("Welcome to the mansion", req.ip);
    next();
}

router.get("/room", butler, (req, res, next) => {
    console.log("Room 1");
    next();
    //res.send({ data: "This is room 1" })
});

router.get("/room", (req, res, next) => {
    console.log("Welcome to the exclusive room");
    next();
}, (req, res, next) => {
    console.log("Room 2");
    //next();
    res.send({ data: "This is room 2" })
});

export default router;