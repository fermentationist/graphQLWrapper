const {GraphQLObjectType} =  require("graphql");
const dealFields = require("./fields/deal/dealFields.js");

const DealType = new GraphQLObjectType({
    name: "Deal",
    fields: dealFields
});

module.exports = DealType;