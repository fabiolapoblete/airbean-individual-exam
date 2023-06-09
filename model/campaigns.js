const nedb = require("nedb-promise");

// Create campaign database
const campaignDB = new nedb({ filename: "campaign.db", autoload: true });

function addCampaign(campaign) {
  campaignDB.insert({ campaign });
}

module.exports = addCampaign;
