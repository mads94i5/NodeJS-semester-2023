import db from './connection.js';


await db.albums.updateMany({}, { $set: { label: "EMI" }});
const response = await db.albums.updateOne({ title: "Shine On You Crazy Diamond" }, { $set: { score: 8.6 }});

console.log(response);