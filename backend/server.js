const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const menuRoutes = require("./routes/menuRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/menu", menuRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {

})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
