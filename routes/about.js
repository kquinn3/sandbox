const express = require("express");
const router = express.Router();

//About Purpose Route
router.get("/purpose", (req, res) => {
  res.render("about/purpose", {
    layout: "about_layout"
  });
});

//About NodeJS Route
router.get("/nodejs", (req, res) => {
  res.render("about/nodejs", {
    layout: "about_layout"
  });
});

//About Mongo Route
router.get("/mongo", (req, res) => {
  res.render("about/mongo", {
    layout: "about_layout"
  });
});

//About Javascript Route
router.get("/javascript", (req, res) => {
  res.render("about/javascript", {
    layout: "about_layout"
  });
});

//About CSS Route
router.get("/css", (req, res) => {
  res.render("about/css", {
    layout: "about_layout"
  });
});

//About Bootstrap Route
router.get("/bootstrap", (req, res) => {
  res.render("about/bootstrap", {
    layout: "about_layout"
  });
});

module.exports = router;
