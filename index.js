require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

const mongoose = require("mongoose");
const uri = process.env.DB_HOST || "localhost";
const userRoutes = require("./routes/users");
async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

connect();

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`port ${PORT}`);
});
