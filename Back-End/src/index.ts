import express from "express";
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import router from "./routes";
import "./database";
import 'dotenv/config'
import bulkCreateToDb from "./controllers/bulkCreateToDb";
const { PORT } = process.env
const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use("/", router)
server.listen(PORT, () => {
    bulkCreateToDb();
    console.log(`Server running on port ${PORT}`);
})