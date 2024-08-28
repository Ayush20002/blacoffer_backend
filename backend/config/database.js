const { MongoClient } = require('mongodb');
const mongoURI = process.env.MONGO_URI;

const connectToDatabase = async () => {
    const client = new MongoClient(mongoURI);
    await client.connect();
    return client;
};

module.exports = connectToDatabase;
