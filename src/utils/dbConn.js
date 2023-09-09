import { MongoClient } from 'mongodb';

let cachedClient = null;

export async function connectToDatabase() {
    if (cachedClient) {
        return cachedClient;
    }

    const uri = process.env.MONGODB_URI;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    const client = new MongoClient(uri, options);

    try {
        await client.connect();
        cachedClient = client;
        return client;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}
