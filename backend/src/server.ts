import "dotenv/config";
import app from "./app.js";
import { dbConnection } from "./db/database-connection.js";
const PORT = process.env.PORT;

function serverOn() {
  app.listen(PORT, () => {
    console.log(`starting ${PORT}`);
    dbConnection();
  });
}
serverOn();
