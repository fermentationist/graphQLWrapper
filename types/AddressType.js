const {GraphQLObjectType} = require("graphql");
const addressFields = require("./fields/address/addressFields.js");

const AddressType = new GraphQLObjectType({
    name: "Address",
    fields: addressFields,
});

AddressType.addressFields = addressFields;
AddressType.addressInputFields = require("./fields/address/addressInputFields.js");
module.exports = AddressType;