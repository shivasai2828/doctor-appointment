import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Db connected");
  } catch (err) {
    console.log(err);
  }
};

export default ConnectDB;
