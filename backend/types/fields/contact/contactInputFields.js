const {
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
} = require("graphql");
const contactFields = require("./contactFields.js");
const contactLinkFields = require("./contactLinkFields.js");

const linkInputs = {// change link type from GraphQLObjectType (output type) to GraphQLInputObjectType (input type)
    type: new GraphQLInputObjectType({
        name: "LinkInputs",
        fields: contactLinkFields
    })
}
//∞∞∞∞∞ customize contactLinkFields object for use in createContact mutation ∞∞∞∞∞//
const createContactFields = {...contactFields};
// const createContactFields = JSON.parse(JSON.stringify(contactFields));// spread operator clone not deep enough :(
delete createContactFields.id;// id is assigned automatically when contact is created, so the id field should not be set through input
createContactFields.links = {...linkInputs};// change link type from GraphQLObjectType (output type) to GraphQLInputObjectType (input type)

createContactFields.email = {type: new GraphQLNonNull(GraphQLString)};// email is a required field when creating a new contact


//∞∞∞∞∞ customize contactLinkFields object for use in updateContact mutation ∞∞∞∞∞//
const updateContactFields = {...contactFields};
// const updateContactFields = JSON.parse(JSON.stringify(contactFields));// spread operator clone not deep enough :(
updateContactFields.links = {...linkInputs};// change link type from GraphQLObjectType (output type) to GraphQLInputObjectType (input type)
updateContactFields.id = {type: new GraphQLNonNull(GraphQLID)};// id is a required field when updating a contact

exports.updateContactFields = updateContactFields;

exports.createContactFields = createContactFields;