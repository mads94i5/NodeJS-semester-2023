import { Router } from "express";
const router = Router();

router.post("/auth/login", (req, res) => {
    res.send({ data: "Logging in" });
});

router.post("/auth/signup", (req, res) => {
    res.send({ data: "Signing up" });
});

export default router;