const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api", require("./routers/BlogRouter"));
app.use("/api", require("./routers/commentRouter"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
