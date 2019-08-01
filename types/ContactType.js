const {GraphQLObjectType} = require("graphql");//import GraphQL types
const contactFields = require("./fields/contact/contactFields.js");

const ContactType = new GraphQLObjectType({
    name: "Contact",
    fields: () => contactFields,
});
ContactType.contactFields = contactFields;
ContactType.contactInputFields = require("./fields/contact/contactInputFields.js");
module.exports = ContactType;