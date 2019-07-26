const {GraphQLObjectType} = require("graphql");
const Queries = require("./Queries.js");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => Queries,
});

module.exports =  RootQuery;