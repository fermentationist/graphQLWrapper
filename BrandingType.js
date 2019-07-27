const {GraphQLObjectType} = require("graphql");
const brandingFields = require("./brandingFields.js");
const BrandingType = new GraphQLObjectType({
    name: "Branding",
    fields: () => brandingFields
});