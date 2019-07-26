const {GraphQLObjectType} = require('graphql');
const Mutations = require("./Mutations.js");

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: () => Mutations
});

module.exports = RootMutation;