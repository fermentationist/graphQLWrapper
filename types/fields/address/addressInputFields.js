const {
    GraphQLNonNull, 
    GraphQLID,
    GraphQLString,
    GraphQLInputObjectType,
} = require("graphql");
const addressFields = require("./addressFields.js");
const addressLinkFields = require("./addressLinkFields.js");

const linkInputs = {// change link type from GraphQLObjectType (output type) to GraphQLInputObjectType (input type)
    type: new GraphQLInputObjectType({
        name: "AddressLinkInputs",
        fields: addressLinkFields
    })
}
const addressInputFields = {...addressFields};
addressInputFields.company_name = {type: new GraphQLNonNull(GraphQLString)};
addressInputFields.address_1 = {type: new GraphQLNonNull(GraphQLString)};
addressInputFields.country = {type: new GraphQLNonNull(GraphQLString)};
addressInputFields.links = linkInputs;
module.exports = addressInputFields;