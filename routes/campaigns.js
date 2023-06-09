const express = require("express");
const addCampaign = require("../model/campaigns");
const router = express.Router();

router.post("/", async (req, res) => {
  const campaignProducts = req.body.products;
  const campaignPrice = req.body.price;

  const campaign = {};

  campaign.products = campaignProducts;
  campaign.price = campaignPrice;

  addCampaign(campaign);

  res.send({ success: true, message: "A new campaign was added" });
});

module.exports = router;
