import { config } from "../config.mjs";
import MongoDB from "mongodb";

let db;

export async function connectDB() {
  return MongoDB.MongoClient.connect(config.db.host).then((client) => {
    db = client.db("aidetect");
  });
}

export function getUsers() {
  return db.collection("users"); // 없으면 만듦
}

export function getPosts() {
  return db.collection("posts");
}
