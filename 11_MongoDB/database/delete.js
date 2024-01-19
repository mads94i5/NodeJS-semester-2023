import db from './connection.js';

const response = await db.albums.deleteOne({ title: "Shine On You Crazy Diamond" });

console.log(response);