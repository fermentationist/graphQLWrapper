const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require("graphql");
const ContactType = require("./ContactType.js");
const baseURL = "https://independentdeveloper1563819244.api-us1.com/api/3/";
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
        },
        contact: {
            type: GraphQLObjectType,
            resolve: () => {
                fetch()
            },
    }),
});

module.exports =  QueryRoot;