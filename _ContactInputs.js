const {GraphQLInputObjectType} = require("graphql");
const contactFields = require("./contactFields.js");

const ContactInputs = new GraphQLInputObjectType({
    name: "ContactInputs",
    description: "Input fields to query, create, or update Contact",
    fields: () => contactFields,         
});

module.exports = ContactInputs;