const {GraphQLObjectType} = require("graphql");
const campaignFields = require("./fields/campaign/campaignFields.js");

const CampaignType = new GraphQLObjectType({
    name: "Campaign",
    fields: campaignFields,
})

CampaignType.campaignFields = campaignFields;
// CampaignType.campaignInputFields = require("./fields/campaign/campaignInputFields.js");
module.exports = CampaignType;