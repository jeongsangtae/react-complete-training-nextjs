import { MongoClient } from "mongodb";
import { MONGODB_PW } from "../config";

// /api/new-meetup
// POST /api/new-meetup

const handler = async () => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://wjdtkdxo55:${MONGODB_PW}@cluster0.mj7yngh.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
