import db from './connection.js';

const response1 = await db.albums.insertOne({ title: "Shine On You Crazy Diamond", score: 9.8 });
console.log(response1);

const response2 = await db.albums.insertOne({ title: "Piper at the gates of dawn", score: 9.8 });
console.log(response2);