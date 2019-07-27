const fetchREST = require("./fetchREST.js");
const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID,
    GraphQLInterfaceType,
} = graphql;
const Contact = require("./ContactType.js");
const Score = require("./ScoreType");
const Automation = require("./AutomationType.js");

const getAll = field => {
    return async () => {
        const result = await fetchREST(field).then(data => data);
        return result.meta.total === "0" ? null : result[field];
    }
}

const getOne = async (type, id) => {
    const result = await fetchREST(`${type}s/${id}`).then(data => data);
    return result.message ? result.message : result[type];
}

const Queries = {
    contacts: {
        type: GraphQLList(Contact),
        resolve:  getAll("contacts"),
    },
    contact: {
        type: Contact,
        args: {
            id: {type: GraphQLID}
        },
        resolve: (root, {id}) => getOne("contact", id),
    },
    score: {
        type: Score,
        args: {
            id: {type: GraphQLID}
        },
        resolve: (root, {id}) => getOne("contact", id),
    },
    scores: {
        type: GraphQLList(Score),
        resolve: getAll("scores"),
    },
    automations: {
        type: GraphQLList(Automation),
        resolve: getAll("automations"),
    },  
}

module.exports = Queries;