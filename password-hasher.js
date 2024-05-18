import { client } from "./db-client.js";
import * as bcrypt from "bcrypt";
const SALT_ROUNDS = 10;

await client.connect();
const db = client.db("test");
const userCollection = db.collection("user");
const users = await userCollection.find().toArray();
for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.User_password, SALT_ROUNDS);
    await userCollection.updateOne({ _id: user._id }, { $set: { User_password: hashedPassword } });
}
await client.close();