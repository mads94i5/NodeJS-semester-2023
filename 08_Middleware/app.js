import express from "express";
const app = express();
import { rateLimit } from 'express-rate-limit'

const allRoutesRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 200, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})

// Apply the rate limiting middleware to all requests.
app.use(allRoutesRateLimiter);

const authRoutesRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})
app.use("/auth*", authRoutesRateLimiter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

function ipLogger(req, res, next) {
    console.log("IP Log:", new Date(), req.ip);
    next();
}

// app.use(ipLogger);

app.use("/room", ipLogger);

function doorman(req, res, next) {
    if (req.params.phrase === "SesameOpen") {
        next();
    } else {
        res.send({ data: "You do not have access "});
    }
}

import roomsRouter from "./routers/roomsRouter.js";
app.use(roomsRouter);
import furnitureRouter from "./routers/furnituresRouter.js";
app.use(furnitureRouter);

app.get("/secret/:phrase", doorman, (req, res) => {
    res.send({ data: "You are in the secret room" })
});

app.get("*", (req, res) => {
    res.send("<h1>404 Error - Page not found</h1>")
});

app.all("*", (req, res) => {
    res.status(404).send({ data: `Unsupported path ${req.path}`})
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server running on port:", PORT));