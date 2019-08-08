const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    buildSchema,
    printSchema,
} = require("graphql");
const Queries = require("./queries");
const Mutations = require("./mutations");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => Queries,
});

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: () => Mutations,
});

const Schema = new GraphQLSchema({
    query: RootQuery, 
    mutation: RootMutation,
});
printSchema(Schema)
module.exports = Schema;
// printSchema(Schema)
