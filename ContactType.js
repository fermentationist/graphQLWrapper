const {
    GraphQLObjectType,
    GraphQLID
} = require("graphql");
const ContactListType = require("./ContactListType.js");

const ContactType = new GraphQLObjectType({
    name: "Contact",
    fields: {
        id: {
            type: GraphQLID
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        links: {
            
        }
    }
});

module.exports = ContactType;

