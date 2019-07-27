const {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLBoolean,
} = require("graphql");
const automationLinkFields = require("./automationLinkFields.js");

const automationFields = {
    name: {
        type: GraphQLString,
    },
    cdate: {
        type: GraphQLString,
    },
    mdate: {
        type: GraphQLString,
    },
    userid: {
        type: GraphQLID,
    },
    status: {
        type: GraphQLInt,
    },
    entered: {
        type: GraphQLBoolean,
    },
    exited: {
        type: GraphQLBoolean,
    },
    hidden: {
        type: GraphQLBoolean,
    },
    defaultscreenshot: {
        type: GraphQLString,
    },
    screenshot: {
        type: GraphQLString,
    },
    links: {
        type: new GraphQLObjectType({
            name: "AutomationLinks",
            fields: automationLinkFields,
        }),
    },
    id: {
        type: GraphQLID,
    },
}

module.exports = automationFields;