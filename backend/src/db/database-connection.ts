import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION!);
    console.log("Database connected");
  } catch (error) {
    console.log(`connection failed : ${error}`);
  }
};
