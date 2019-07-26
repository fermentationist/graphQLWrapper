const fetchREST = require("./fetchREST.js");
const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID
} = graphql;
const Contact = require("./ContactType.js");
const Score = require("./ScoreType");

// const getContact = async (root, {id}) => {
//     return await fetchREST(`contacts/${id}`).then(data => data.contact);
// }
const Queries = {
    contacts: {
        type: GraphQLList(Contact),
        resolve:  () => {
            console.log("contacts.resolve() called.")
            return fetchREST("contacts").then(data => data.contacts)
        },
    },
    contact: {
        type: Contact,
        args: {
            id: {type: GraphQLID}
        },
        resolve:  async (root, {id}) => {
            return await fetchREST(`contacts/${id}`).then(data => data.contact);
        },
    },
    score: {
        type: Score,
        args: {
            id: {type: GraphQLID}
        },
        resolve: async (root, {id}) => {
            return await fetchREST(`scores/${id}`).then(data => data.score);
        },
    },
    scores: {
        type: new GraphQLList(Score),
        resolve: async () => {
            return await fetchREST(`scores`).then(data => data.scores);
        },
    },
    
}

module.exports = Queries;