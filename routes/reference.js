const express = require("express");
const router = express.Router();

// //Reference index Route
// router.get("/", (req, res) => {
//   res.render("reference/index", {
//     layout: "reference_layout"
//   });
// });

//Reference CSS Route
router.get("/css", (req, res) => {
  // res.render("reference/css");
  res.render("reference/css", {
    layout: "reference_layout"
  });
});

//Reference Javascript Route
router.get("/javascript", (req, res) => {
  res.render("reference/javascript", {
    layout: "reference_layout"
  });
});

//Reference node Route
router.get("/nodejs", (req, res) => {
  res.render("reference/nodejs", {
    layout: "reference_layout"
  });
});

//Reference Bootstrap Route
router.get("/bootstrap", (req, res) => {
  res.render("reference/bootstrap", {
    layout: "reference_layout"
  });
});

module.exports = router;
