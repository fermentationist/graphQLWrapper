const {GraphQLID, 
    GraphQLString, 
    GraphQLBoolean} = require("graphql");

const brandingFields = {
    groupid: {
        type: GraphQLID,
    },
    siteName: {
        type: GraphQLString,
    },
    siteLogo: {
        type: GraphQLString,
    },
    siteLogoSmall: {
        type: GraphQLString,
    },
    headerTextValue: {
        type: GraphQLString,
    },
    headerHtmlValue: {
        type: GraphQLString,
    },
    footerTextValue: {
        type: GraphQLString,
    },
    footerHtmlValue: {
        type: GraphQLString,
    },
    copyright: {
        type: GraphQLBoolean,
    },
    version: {
        type: GraphQLBoolean,
    },
    license: {
        type: GraphQLBoolean,
    },
    links: {
        type: GraphQLBoolean,
    },
    help: {
        type: GraphQLString,
    },
    adminTemplateHtm: {
        type: GraphQLString,
    },
    adminTemplateCss: {
        type: GraphQLString,
    },
    publicTemplateHtm: {
        type: GraphQLString,
    },
    publicTemplateCss: {
        type: GraphQLString,
    },
    favicon: null,
    id: {
        type: GraphQLString,
    },
}

module.exports = brandingFields;