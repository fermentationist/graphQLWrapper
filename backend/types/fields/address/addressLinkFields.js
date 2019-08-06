const {GraphQLString} = require("graphql");

const addressLinkFields =  {
    addressGroup: {
        type: GraphQLString,
    },
    addressList: {
        type: GraphQLString,
    },
    forms: {
        type: GraphQLString,
    },
}

module.exports = addressLinkFields;