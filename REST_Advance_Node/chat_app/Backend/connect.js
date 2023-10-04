const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/login_system", (err) => {
  if (err) console.error.bind(console, "could not connnect");
});
const client = mongoose.connection;

client.on("connected", () => {
  console.log(" mongodb connected");
});
client.on("disconnected", () => {
  console.log("mongodb disconnected");
});
client.on("error", () => {
  console.log("error occured couldnt connect mongodb");
});
