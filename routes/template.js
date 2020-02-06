const express = require("express");
const router = express.Router();

// //Template index Route
// router.get("/", (req, res) => {
//   res.render("template/index", {
//     layout: "template_layout"
//   });
// });

//Template Multi-Image Route
router.get("/multi_image", (req, res) => {
  // res.render("reference/css");
  res.render("template/multi_image", {
    layout: "template_layout"
  });
});
//Template navbars Route
router.get("/navbars", (req, res) => {
  // res.render("reference/css");
  res.render("template/navbars", {
    layout: "template_layout"
  });
});

module.exports = router;
