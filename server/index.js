import express from "express";
import morgan from "morgan";

import mongooseConnection from "./config/db.js";

import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongodb connection
mongooseConnection();

//Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());

//Routes


//Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});