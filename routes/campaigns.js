const express = require("express");
const addCampaign = require("../model/campaigns");

const router = express.Router();

// Router for adding campaign to database
router.post("/", async (req, res) => {
  const campaign = req.body;
  addCampaign(campaign);

  res.send({ success: true, message: "A new campaign was added" });
});

module.exports = router;
