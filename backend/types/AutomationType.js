const {GraphQLObjectType} = require("graphql");
const automationFields = require("./fields/automation/automationFields.js");

const AutomationType = new GraphQLObjectType({
    name: "AutomationType",
    fields: () => automationFields
});
AutomationType.automationFields = automationFields;
module.exports = AutomationType;