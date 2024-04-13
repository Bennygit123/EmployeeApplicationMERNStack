const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoutes");
const db = require("./DB/db");

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

