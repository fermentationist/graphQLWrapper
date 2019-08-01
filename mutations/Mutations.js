const mutationResolver = require("./mutationResolvers.js");
const {Contact, Branding, Address} = require("../types");
const {contactInputFields} = Contact;
const Mutations = {
    createContact: {
        type: Contact,
        args: contactInputFields.createContactFields,
        resolve: mutationResolver("contact", "POST"),
    },  
    updateContact: {
        type: Contact,
        args: contactInputFields.updateContactFields,
        resolve: mutationResolver("contact", "PUT"),
    },
    deleteContact: {
        type: Contact,
        args: contactInputFields.updateContactFields,
        resolve: mutationResolver("contact", "DELETE"),
    },
    updateBranding: {
        type: Branding,
        args: Branding.brandingInputFields,
        resolve: mutationResolver("branding", "PUT"),
    },
    // createAddress: {// Address not fully implemented? API documentation inconsistent
    //     type: Address,
    //     args: Address.addressInputFields,
    //     resolve: mutationResolver("addresses", "POST"),
    // },
}

module.exports = Mutations;