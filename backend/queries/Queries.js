const graphql = require("graphql");
const {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} = graphql;
const {getAll, getOne} = require("./queryResolvers.js");
const fetchREST = require("../fetchREST.js");
const {Contact, Score, Automation, Branding, Address, Campaign} = require("../types");

const Queries = {
    contacts: {
        type: GraphQLList(Contact),
        resolve:  getAll("contacts"),
    },
    contact: {
        type: Contact,
        args: {
            id: {type: GraphQLNonNull(GraphQLID)}
        },
        resolve: getOne("contact"),
    },
    score: {
        type: Score,
        args: {
            id: {type: GraphQLID}
        },
        resolve: getOne("contact"),
    },
    scores: {
        type: GraphQLList(Score),
        resolve: getAll("scores"),
    },
    automations: {
        type: GraphQLList(Automation),
        resolve: getAll("automations"),
    },  
    brandings: {
        type: GraphQLList(Branding),
        resolve: getAll("brandings"),
    },
    branding: {
        type: Branding,
        args: {
            id: {type: GraphQLID},
        },
        resolve: getOne("branding"),
    },
    campaign: {
        type: Campaign,
        args: {
            id: {type: GraphQLNonNull(GraphQLID)}
        },
        resolve: getOne("campaign"),
    },
    campaigns: {
        type: GraphQLList(Campaign),
        // args: {
        //     id: {type: GraphQLID},
        // },
        resolve: getAll("campaigns"),
        
    },
    // campaigns: {
    //     type: Campaign,
    //     args: {
    //         id: {type: GraphQLID},
    //     },
    //     resolve: (root, {id}) => {
    //         if (id) {
    //             console.log("id is not undefined");
    //             return fetchREST(`campaigns/${id}/links`);
    //         }
    //         console.log("id is undefined.")
    //         return getAll("campaigns")();
    //     },
        
    // },

    // addresses: {// Address not fully implemented? API documentation inconsistent
    //     type: Address,
    //     resolve: getAll("addresses"),
    // },
}

module.exports = Queries;