const {
    GraphQLString,
    GraphQLID,
    GraphQLList } = require("graphql");
    
const scoreFields = {
    reltype: {
        type: GraphQLString
    },
    name: {
        type: GraphQLString
    },
    descript: {
        type: GraphQLString
    },
    status: {
        type: GraphQLString
    },
    cdate: {
        type: GraphQLString
    },
    mdate: {
        type: GraphQLString
    },
    links: {
        type: GraphQLList(GraphQLString)
    },
    id: {
        type: GraphQLID
    }
};

module.exports = scoreFields;