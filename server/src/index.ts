import express from "express";
// const router = require("./router");
import router from "./router";
// import { RunResult } from "sqlite3";
// import database from "./database";
import cors from "cors";
require("dotenv").config();

const PORT = process.env.PORT || 3333;

const app = express();
// const session: any = {};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "*");
  app.use(cors());
  next();
});

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`⚡ servidor ${PORT}`));
