import * as sdk from "node-appwrite";

// export const {
//   PROJECT_ID,
//   API_KEY,
//   DATABADE_ID,
//   PATIENT_COLLECTION_ID,
//   DOCTORT_COLLECTION_ID,
//   APPOINTMENT_COLLECTION_ID,
//   NEXT_PUBLIC_BUCKET_ID,
//   NEXT_PUBLIC_ENDPOINT,
// } = process.env;

const NEXT_PUBLIC_ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const API_KEY = process.env.API_KEY;

const client = new sdk.Client();
client.setEndpoint(NEXT_PUBLIC_ENDPOINT!);
client.setProject("66fa84e90030ef29ced8");
client.setKey(
  "standard_0e125db89538bef8274dd6c7241f10ba34afb07aa7686cebbd444a6ed3b12bfb2a7c2ecc41e1d3b469c1653b96d1b5063d95ed0e15dac52165670a004c77ae0f9ff54d8e58ef129d3bf61fa38be79a8bbe0876c189a4f719355da34855ec4eb18ced306e68df75ba5cf0028e870dec32983fa9c6463112e1f4a8e4c482116f82"
);

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
