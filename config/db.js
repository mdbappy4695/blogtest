const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB is conneted on ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`MongoDB error ${mongoose.error}`.bgRed.white);
  }
};

module.exports = connectDB;
