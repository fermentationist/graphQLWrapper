const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt,
} = require("graphql");
const addressLinkFields = require("./addressLinkFields.js");

const addressFields = {
        groupid: {
            type: GraphQLInt
        },
        company_name: {
            type: GraphQLString,
        },
        address_1: {
            type: GraphQLString,
        },
        address_2: {
            type: GraphQLString,
        },
        city: {
            type: GraphQLString,
        },
        state: {
            type: GraphQLString,
        },
        district: {
            type: GraphQLString,
        },
        zip: {
            type: GraphQLString,
        },
        country: {
            type: GraphQLString,
        },
        allgroup: {
            type: GraphQLInt,
        },
        is_default: {
            type: GraphQLBoolean,
        },
        links: {
            type: new GraphQLObjectType({
                name: "AddressLinks",
                fields: addressLinkFields,
            }),
        },
        id: {
            type: GraphQLID,
        },
}

module.exports = addressFields;