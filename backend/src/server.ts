import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();
const PORT = process.env.PORT;
function serverOn() {
  app.listen(PORT, () => {
    console.log(`starting ${PORT}`);
  });
}
serverOn();
