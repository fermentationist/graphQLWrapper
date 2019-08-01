const {GraphQLNonNull, GraphQLID} = require("graphql");
const brandingFields = require("./brandingFields.js");

//∞∞∞∞∞ customize reusable 'fields' objects for use in mutations ∞∞∞∞∞//
const brandingInputFields = {...brandingFields};
brandingInputFields.id = {type: new GraphQLNonNull(GraphQLID)};// id is a required field when updating a branding

module.exports = brandingInputFields;