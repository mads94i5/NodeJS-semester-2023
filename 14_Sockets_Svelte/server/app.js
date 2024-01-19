import "dotenv/config";
import express from "express";
const app = express();

import path from "path";
app.use(express.static(path.resolve("../client/dist")));

app.use(express.json());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}))

import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
app.use(sessionMiddleware);

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["*"],
        credentials: "true"
    }
});

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));

io.on("connection", (socket) => {
    console.log("A socket connected");
    socket.on("client-color", (data) => {
        console.log(socket.request.session.name);
        data.name = socket.request.session.name;
        io.emit("server-color", data);
    });
});

const PORT = process.env.PORT || 8090;
server.listen(PORT, console.log("Server running on port:", PORT));