import express from "express";
const app = express();

app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A socket connected:", socket.id);

    // client-selected-colour
    socket.on("client-selected-colour", (data) => {
        // console.log(data);
        // only emits to the socket itself
        // socket.emit("server-sent-colour", data);

        // sends to all the sockets in the namespace but itself
        // socket.broadcast.emit("server-sent-colour", data);

        // sends out to all sockets in the namespace
        io.emit("server-sent-colour", data);
    });
});


const PORT = process.env.PORT || 8082;
server.listen(PORT, () => console.log("Server running on port:", PORT));