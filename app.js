require("dotenv").config();
const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const PORT = 5000 || process.env.PORT;
const connectDB = require("./server/config/db");

//Connect to DB
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//template Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
