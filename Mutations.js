const {contactFields} = Contact = require("./ContactType.js");
const fetchREST = require("./fetchREST.js");
const {updateContactFields, createContactFields} = require("./mutateContactFields.js");

const Mutations = {
    createContact: {
        type: Contact,
        args: createContactFields,
        resolve: async (root, args, context, info) => {
            return await fetchREST("contacts", {contact: args}, "POST").then(data => {
                console.log("contact created.", data);
                return data.contact;
            });
        }
    },  
    updateContact: {
        type: Contact,
        args: updateContactFields,
        resolve: async (root, args) => {
            const {id, ...body} = args;
            return await fetchREST(`contacts/${args.id}`, {contact: body}, "PUT").then(data => {
                console.log("contact updated.");
                return data.contact;
            });
        }
    },
    deleteContact: {
        type: Contact,
        args: updateContactFields,
        resolve: async (root, args) => {
            const {id, ...body} = args;
            return await fetchREST(`contacts/${args.id}`, null, "DELETE").then(data => {
                console.log("contact deleted.");
            console.log("TCL: data", data)
                return data;
            });
        }
    },
}

module.exports = Mutations;