const {GraphQLNonNull, GraphQLString} = require("graphql");
const contactFields = require("./contactFields.js");
const linkFields = require("./linkFields.js");

const linkInputs = {// change link type from GraphQLObjectType (output type) to GraphQLInputObjectType (input type)
    type: new GraphQLInputObjectType({
        name: "LinkInputs",
        fields: linkFields
    })
}
//∞∞∞∞∞ customize reusable 'fields' objects for use in mutations ∞∞∞∞∞//
const updateContactFields = {...contactFields};
updateContactFields.links = {...linkInputs};// change link type from GraphQLObjectType (output type) to GraphQLInputObjectType (input type)
updateContactFields.id = {type: new GraphQLNonNull(GraphQLID)};// id is a required field when updating a contact

exports.updateContactFields = updateContactFields;