import express from "express";
import * as path from "path";
import { loginPath } from "./login.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.use(express.static("../client/dist/"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api/")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

app.use("/api/login", loginPath);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
