import { app } from "./app.js";
import mongoose from "mongoose";

import * as dotenv from "dotenv";
import path from "path";
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
// reading env variables
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

dotenv.config({ path: path.join(__dirname, "../.env") });

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("connected to database");

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
}

main();
