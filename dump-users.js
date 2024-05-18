import { client } from "./db-client.js";
import * as fs from "fs";

await client.connect();
const db = client.db("test");
const userCollection = db.collection("user");
const users = await userCollection.find().toArray();
if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
}
fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 4));
await client.close();