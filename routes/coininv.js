const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//Load CoinModel model
require("../models/coinInv");
const CoinModel = mongoose.model("CoinModel");

//CoinInv Home
router.get("/home", (req, res) => {
  res.render("coininv/home", {
    layout: "coininv_layout",
    name: "Kevin Quinn",
    programRevision: [
      { rev: "1.0.0.0", date: "September 5,2019" },
      { rev: "1.0.0.1", date: "September 12,2019" }
    ],
    title: "Web Developer and QA Lead"
  });
});

//Add get Route
router.get("/add", (req, res) => {
  res.render("coininv/add", {
    layout: "coininv_layout"
  });
});

//Inventory get Route
router.get("/inventory", (req, res) => {
  //res.render("coininv/inventory");
  let coins = {};

  CoinModel.find()
    .sort({ year: 1 })
    .then(coin => {
      let dollar = [];
      let halfdollar = [];
      let quarter = [];
      let dime = [];
      let nickle = [];
      let penny = [];
      coin.forEach(cs => {
        if (cs.denomination == "dollar") dollar.push(cs);
        if (cs.denomination == "halfdollar") halfdollar.push(cs);
        if (cs.denomination == "quarter") quarter.push(cs);
        if (cs.denomination == "dime") dime.push(cs);
        if (cs.denomination == "nickle") nickle.push(cs);
        if (cs.denomination == "penny") penny.push(cs);
      });
      res.render("coininv/inventory", {
        layout: "coininv_layout",
        // coin: coin
        dollar: dollar,
        halfdollar: halfdollar,
        quarter: quarter,
        dime: dime,
        nickle: nickle,
        penny: penny
      });
    });
});
//Inventory post Route, which processes the add form
router.post("/inventory", (req, res) => {
  const newCoin = {
    denomination: req.body.denomination,
    mint: req.body.mint,
    year: req.body.year
  };
  new CoinModel(newCoin).save().then(coin => {
    req.flash("success_msg", "Coin added");
    res.redirect("/coininv/inventory");
  });
});

//Inventory Delete the coin. Method Override makes it delete and the mongo element ID is appended to URL
router.delete("/inventory/:id", (req, res) => {
  CoinModel.remove({ _id: req.params.id }).then(() => {
    req.flash("success_msg", "Coin removed");
    res.redirect("/coininv/inventory");
  });
});

//Edit coin get Route
router.get("/edit/:id", (req, res) => {
  CoinModel.findOne({
    _id: req.params.id
  }).then(coin => {
    res.render("./coininv/edit", {
      coin: coin
    });
  });
});

//Edit coin put Route
router.put("/edit/:id", (req, res) => {
  CoinModel.findOne({
    _id: req.params.id
  }).then(coin => {
    coin.denomination = req.body.denomination;
    coin.mint = req.body.mint;
    coin.year = req.body.year;
    coin.save().then(() => {
      req.flash("success_msg", "Coin updated");
      res.redirect("/coininv/inventory");
    });
  });
});

module.exports = router;
