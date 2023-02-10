const app = require("./src/app");

const connect = require("./src/configs/db");

app.listen(3000, async function () {
  await connect();
  console.log("Listening to port 3000");
});
