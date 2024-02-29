// import dotenv from 'dotenv';
// dotenv.config();
import type { ObjectId } from 'mongodb';
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = process.env.PORT || 3001;

export type Starter = {
  _id: ObjectId;
  name: string;
  email: string;
  startnumber: string;
};

app.use(express.json());

app.get('/api', async (_req, res) => {
  res.json({ message: await getData() });
});

app.post('/api/addStarter', (req, res) => {
  const newStarter = [req.body];
  sendData(newStarter);
  res.json({ message: 'Added User' });
});

const uri =
  'mongodb+srv://silentpanther19:XMJbdG74kEjUmmEv@klappi.cnw7vpg.mongodb.net/Klappi?retryWrites=true&w=majority&appName=Klappi';
const client = new MongoClient(uri);
// Send Data to MongoDB
async function sendData(starter: Starter[]) {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db('Rennen2024');
    const coll = db.collection('Starter');
    // insert code goes here

    const result = await coll.insertMany(starter);
    // display the results of your operation
    console.log(result.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// Get Data from MongoDB
export async function getData(): Promise<any> {
  try {
    await client.connect();
    const StarterList: any = [];
    // database and collection code goes here
    const db = client.db('Rennen2024');
    const coll = db.collection('Starter');
    // find code goes here
    const cursor = coll.find({});
    // iterate code goes here
    await cursor.forEach((a) => StarterList.push(a));

    return StarterList;
    // await console.log(JSON.parse(JSON.stringify(cursor)));
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.use(express.static('dist/app'));
app.listen(port, () => {
  console.log(`Your server listening on port: ${port}!`);
});
