const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    buildSchema
} = require("graphql");
const QueryRoot = require("./QueryRoot.js");

console.log("graphql:", graphql);

const schema = buildSchema(`{
    type Query: ${QueryRoot}, 
}`);
// {
//     query: QueryRoot
// };
module.exports = schema//new GraphQLSchema(schema);