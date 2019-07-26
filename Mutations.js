const {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
} = require("graphql");
const Contact = require("./ContactType.js");
const contactFields = require("./contactFields.js");
const fetchREST = require("./fetchREST.js");
const createFields = {...contactFields};
delete createFields.id;
const updateFields = {...contactFields};
updateFields.email = {type: GraphQLString};
updateFields.id = {type: new GraphQLNonNull(GraphQLID)};
const Mutations = {
    createContact: {
        type: Contact,
        args: createFields,
        resolve: async (root, args, context, info) => {
            return await fetchREST("contacts", {contact: args}, "POST").then(data => {
                console.log("contact created.", data);
                return data.contact;
            })
            
        }
    },  
    updateContact: {
        type: Contact,
        args: updateFields,
        resolve: async (root, args) => {
            const {id, ...body} = args;
            return await fetchREST(`contacts/${args.id}`, {contact: body}, "PUT").then(() => console.log("contact updated."))
        }
    },
    deleteContact: {
        type: Contact,
        args: updateFields,
        resolve: async (root, args) => {
            const {id, ...body} = args;
            return await fetchREST(`contacts/${args.id}`, null, "DELETE").then(() => console.log("contact deleted."))
        }
    },

}

module.exports = Mutations;