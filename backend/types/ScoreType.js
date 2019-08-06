const {GraphQLObjectType} = require("graphql");
const scoreFields = require("./fields/score/scoreFields.js");

const ScoreType = new GraphQLObjectType({
    name: "Score",
    fields: () => scoreFields
});

module.exports = ScoreType;
exports.scoreFields = scoreFields;