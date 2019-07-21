const {
    graphql,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
} = require("graphql");

const QueryRoot = new GraphQLObjectType({
    name: "QueryRoot",
    description: "you know, for kids...",
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: () => "world",
        }
    }),
});

module.exports =  QueryRoot;