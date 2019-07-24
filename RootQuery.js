const fetchREST = require("./fetchREST.js");
const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID
} = graphql;
const fetch = require("node-fetch");
const ContactType = require("./ContactType.js");

const getContact = async (root, args) => {
    return await fetchREST(`contacts/${args.id}`).then(data => data.contact);
}

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: () => "world",
        },
        magic_number: {
            type: GraphQLInt,
            resolve: () => 3,
        },
        contacts: {
            type: GraphQLList(ContactType),
            resolve:  () => {
                console.log("contacts.resolve() called.")
                return fetchREST("contacts").then(data => data.contacts)
            },
        },
        contact: {
            type: ContactType,
            args: {
                id: {type: GraphQLID}
            },
            resolve:  getContact,
        },
        
    }),
});

module.exports =  RootQuery;