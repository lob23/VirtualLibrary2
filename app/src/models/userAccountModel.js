const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:123@virtuallibrary.tlonh1s.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const addUserAccount = async function addUserAccount(newUser) {
    let result = {};
    try {
        await client.connect(); 
        await client.db("admin").command({ ping: 1 });
        // console.log("connect to mongodb successfully.");
        result = await client.db("VirtualLibraryApplication").collection("userAccount").insertOne(newUser);
    } finally {
        await client.close();
    }
    return result;
}

const retrieveUserAccount = async function addUserAccount(userEmail) {
  let result = {};
    try {
      await client.connect(); 
      await client.db("admin").command({ ping: 1 });
      // console.log("connect to mongodb successfully.");
      result = await client.db("VirtualLibraryApplication").collection("userAccount").findOne(userEmail);
    } finally {
      await client.close();
    }
    return result;
  }

module.exports = {
  addUserAccount,
  retrieveUserAccount
};
