const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js");
const User = require("../models/User.js");

const adminLayout = "../views/layouts/admin";
// Admin - Login -Page
router.get("/admin", (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "Simple Blog Created with Nodejs, Express and MongoDB",
    };
    res.render("admin/index", { locals, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});

//Admin - Check -Login
router.post("/admin", (req, res) => {
  const { username, password } = req.body;
  if (username === "minhnghi" && password === "nguyenbuihuyenthu") {
    // res.send("You are Logged in");
    res.redirect("/");
  } else res.send("You are Failed");
});
module.exports = router;
