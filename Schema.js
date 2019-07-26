const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    buildSchema
} = require("graphql");
const RootQuery = require("./RootQuery.js");
const RootMutation = require("./RootMutation.js");
console.log("TCL: RootMutation", RootMutation)



const schema = {
    query: RootQuery, 
    mutation: RootMutation
};

module.exports = new GraphQLSchema(schema);