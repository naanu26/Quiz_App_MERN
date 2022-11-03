import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(process.env.URI);
  console.log("Database connected!");
}
