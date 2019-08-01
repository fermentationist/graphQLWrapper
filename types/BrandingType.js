const {GraphQLObjectType} = require("graphql");
const brandingFields = require("./fields/branding/brandingFields.js");
const brandingInputFields = require("./fields/branding/brandingInputFields.js");

const BrandingType = new GraphQLObjectType({
    name: "Branding",
    fields: () => brandingFields,
});

BrandingType.brandingFields = brandingFields;
BrandingType.brandingInputFields = brandingInputFields;
module.exports = BrandingType;
