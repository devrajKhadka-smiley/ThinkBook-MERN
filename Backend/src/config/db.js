import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected Successfully");
  } catch (error) {
    console.error("MongoDb Connection Failed:", error.message);
    process.exit(1);
  }
};
