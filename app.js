require("dotenv").config();
const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const PORT = 5000 || process.env.PORT;

app.use(express.static("public"));

//template Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
