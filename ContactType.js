const {GraphQLObjectType} = require("graphql");//import GraphQL types
const contactFields = require("./contactFields.js");

const ContactType = new GraphQLObjectType({
    name: "Contact",
    fields: () => contactFields,
});

module.exports = ContactType;
exports.contactFields = contactFields;

