const {GraphQLString} = require("graphql");

const campaignLinkFields = {
    user: {
        type: GraphQLString,
    },
    automation: {
        type: GraphQLString,
    },
    campaignMessage: {
        type: GraphQLString,
    },
    links: {
        type: GraphQLString,
    },
    aggregateRevenues: {
        type: GraphQLString,
    },

}

module.exports = campaignLinkFields;