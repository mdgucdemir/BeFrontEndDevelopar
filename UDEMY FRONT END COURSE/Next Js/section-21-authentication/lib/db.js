import { MongoClient } from "mongodb";

// "mongodb+srv://MDeniz:xRgtKebcZAKuKAvL@cluster0.umnec7w.mongodb.net/<data-name>?retryWrites=true&w=majority"
export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://MDeniz:xRgtKebcZAKuKAvL@cluster0.umnec7w.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
  return client;
}
