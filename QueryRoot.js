const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require("graphql");

const QueryRoot = new GraphQLObjectType({
    name: "QueryRoot",
    description: "you know, for kids...",
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: () => "world",
        },
        magic_number: {
            type: GraphQLInt,
            resolve: () => 3,
        }
    }),
});

module.exports =  QueryRoot;