const Contact = require("./ContactType.js");
const fetchREST = require("./fetchREST.js");
const {updateContactFields, createContactFields} = require("./mutateContactFields.js");
console.log("TCL: updateContactFields, createContactFields", updateContactFields, createContactFields)
console.log("TCL: createContactFields.email", createContactFields.email)

const Mutations = {
    createContact: {
        type: Contact,
        args: createContactFields,
        resolve: async (root, args, context, info) => {
            return await fetchREST("contacts", {contact: args}, "POST").then(data => {
                console.log("contact created.", data);
                return data.contact;
            })
        }
    },  
    updateContact: {
        type: Contact,
        args: updateContactFields,
        resolve: async (root, args) => {
            const {id, ...body} = args;
            return await fetchREST(`contacts/${args.id}`, {contact: body}, "PUT").then(() => console.log("contact updated."))
        }
    },
    deleteContact: {
        type: Contact,
        args: updateContactFields,
        resolve: async (root, args) => {
            const {id, ...body} = args;
            return await fetchREST(`contacts/${args.id}`, null, "DELETE").then(() => console.log("contact deleted."))
        }
    },

}

module.exports = Mutations;