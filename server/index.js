import express from "express";
import morgan from "morgan";
import cors from "cors";

//db connection import
import mongooseConnection from "./config/db.js";

//Router import
import NotesRouter from './routes/notesRoute.js';


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
app.use('/notes', NotesRouter);


//Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});