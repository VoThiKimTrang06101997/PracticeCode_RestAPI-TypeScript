import * as dotenv from "dotenv";

import app from "./app";
import { AppDataSource } from "./database/data-source";
import { error } from "console";

dotenv.config();

const PORT = process.env.APP_PORT || 3002;

AppDataSource.initialize()
  .then((async) => {
    console.log("Database connection is successfully");
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
