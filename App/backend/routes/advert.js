const express = require("express");
const itemModel = require("../models/item");

let router = express.Router();

router.get("/advert", function (req, res) {
  let query = { user: req.session.user };
  if (req.query.headline) {
    query["headline"] = req.query.headline;
  }
  itemModel
    .find(query)
    .then(function (items) {
      return res.status(200).json(items);
    })
    .catch(function (err) {
      console.log(err);
      return res.status(500).json({ Message: "Internal server error" });
    });
});

router.post("/advert", function (req, res) {
  if (!req.body) {
    return res.status(400).json({ Message: "Bad request" });
  }
  if (!req.body.headline) {
    return res.status(400).json({ Message: "Bad request" });
  }
  let item = new itemModel({
    user: req.session.user,
    headline: req.body.headline,
    ad: req.body.ad,
    email: req.body.email,
    phone: req.body.phone,
    cloudinary_id: req.body.cloudinary_id,
    category: req.body.category,
  });
  item
    .save()
    .then(function (item) {
      return res.status(201).json(item);
    })
    .catch(function (err) {
      console.log(err);
      return res.status(500).json({ Message: "Internal server error" });
    });
});

router.delete("/advert/:id", function (req, res) {
  itemModel
    .deleteOne({ _id: req.params.id, user: req.session.user })
    .then(function (stats) {
      console.log(stats);
      return res.status(200).json({ Message: "Success" });
    })
    .catch(function (err) {
      console.log(err);
      return res.status(500).json({ Message: "Internal server error" });
    });
});

router.put("/advert/:id", function (req, res) {
  if (!req.body) {
    return res.status(400).json({ Message: "Bad request" });
  }
  if (!req.body.headline) {
    return res.status(400).json({ Message: "Bad request" });
  }
  let item = {
    headline: req.body.headline,
    ad: req.body.ad,
    email: req.body.email,
    phone: req.body.phone,
  };
  itemModel
    .replaceOne({ _id: req.params.id, user: req.session.user }, item)
    .then(function (stats) {
      console.log(stats);
      return res.status(201).json({ Message: "Success" });
    })
    .catch(function (err) {
      console.log(err);
      return res.status(500).json({ Message: "Internal server error" });
    });
});

module.exports = router;
