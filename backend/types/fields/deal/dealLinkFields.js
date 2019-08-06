const {GraphQLString} = require("graphql");

const dealLinkFields = {
    dealActivities: {
        type: GraphQLString,
    },
    contact: {
        type: GraphQLString,
    },
    contactDeals: {
        type: GraphQLString,
    },
    group: {
        type: GraphQLString,
    },
    nextTask: {
        type: GraphQLString,
    },
    notes: {
        type: GraphQLString,
    },
    organization: {
        type: GraphQLString,
    },
    owner: {
        type: GraphQLString,
    },
    scoreValues: {
        type: GraphQLString,
    },
    stage: {
        type: GraphQLString,
    },
    tasks: {
        type: GraphQLString,
    },
  }

  module.exports = dealLinkFields;