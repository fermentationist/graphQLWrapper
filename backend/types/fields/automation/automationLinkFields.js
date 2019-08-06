const {GraphQLString} = require("graphql");

const automationLinkFields = {
    campaigns: {
        type: GraphQLString,
    },
    contactGoals: {
        type: GraphQLString,
    },
    contactAutomations: {
        type: GraphQLString,
    },
    blocks: {
        type: GraphQLString,
    },
    goals: {
        type: GraphQLString,
    },
    sms: {
        type: GraphQLString,
    },
    sitemessages: {
        type: GraphQLString,
    },
}

module.exports = automationLinkFields;