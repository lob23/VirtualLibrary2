import { client } from "./db-client.js";

await client.connect();
const db = client.db("test");
const userCollection = db.collection("user");
const users = await userCollection.find().toArray();
for (const user of users) {
    let User_authenticationLevel = user.User_authenticationLevel;
    await userCollection.updateOne(
        { _id: user._id }, { 
            $set: { User_authorizationLevel: User_authenticationLevel },
            $unset: { User_authenticationLevel: "" }
        });
}
await client.close();