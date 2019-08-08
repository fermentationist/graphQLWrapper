const {GraphQLNonNull, GraphQLID} = require("graphql");
const campaignFields = require("./campaignFields.js");
const campaignLinkFields = require("./campaignLinkFields.js");

// const campaignInputLinks = new GraphQLObject({
//     name: "CampaignInputLinks",
//     fields: () => campaignLinkFields,
// });

const campaignInputFields = {...campaignFields};
campaignInputFields.id = {
    type: GraphQLNonNull(GraphQLID)
}

module.exports = campaignInputFields;