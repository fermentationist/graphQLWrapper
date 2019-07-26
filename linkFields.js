const {GraphQLString} = require("graphql");
const linkFields = {
    bounceLogs: {
        type: GraphQLString,
    },
    contactAutomations: {
        type: GraphQLString,
    },
    contactData: {
        type: GraphQLString,
    },
    contactGoals: {
        type: GraphQLString,
    },
    contactLists: {
        type: GraphQLString,
    },
    contactLogs: {
        type: GraphQLString,
    },
    contactTags: {
        type: GraphQLString,
    },
    contactDeals: {
        type: GraphQLString,
    },
    deals: {
        type: GraphQLString,
    },
    fieldValues: {
        type: GraphQLString,
    },
    geoIps: {
        type: GraphQLString,
    },
    notes: {
        type: GraphQLString,
    },
    organization: {
        type: GraphQLString,
    },
    plusAppend: {
        type: GraphQLString,
    },
    trackingLogs: {
        type: GraphQLString,
    },
    scoreValues: {
        type: GraphQLString,
    },
}

module.exports = linkFields;