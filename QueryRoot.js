const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require("graphql");
const ContactType = require("./ContactType.js");


const QueryRoot = new GraphQLObjectType({
    name: "QueryRoot",
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: () => "world",
        },
        magic_number: {
            type: GraphQLInt,
            resolve: () => 3,
        },
        contacts: {
           type: [ContactType]
        },
    })
});

module.exports =  QueryRoot;