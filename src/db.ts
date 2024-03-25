import { MongoClient } from 'mongodb';

const {
  MONGO_URL = 'mongodb+srv://talha123:talha123@cluster0.depwaql.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0',
} = process.env;

export const client = new MongoClient(MONGO_URL);

export const db = client.db('cluster0');
