const {GraphQLObjectType} = require("graphql");//import GraphQL types
const contactFields = require("./contactFields.js");

const ContactType = new GraphQLObjectType({
    name: "Contact",
    fields: () => contactFields,
});
ContactType.contactFields = contactFields;
module.exports = ContactType;



