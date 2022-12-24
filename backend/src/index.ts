import api from "./api";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
dotenv.config({ path: "../.env" });

if (!process.env.MONGO_URI) throw new Error("env: MONGO_URI not defined.");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB!"))
  .catch((err) => {
    console.log("DB connection Error:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(passport.initialize());
app.use(api);
app.listen(PORT, () => {
  console.log("App listening on Port:", PORT);
});
