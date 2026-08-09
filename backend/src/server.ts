import dotenv from "dotenv";
import app from "./app.js";
import { dbConnection } from "./db/database-connection.js";
dotenv.config();
const PORT = process.env.PORT;

function serverOn() {
  app.listen(PORT, () => {
    console.log(`starting ${PORT}`);
    dbConnection();
  });
}
serverOn();
