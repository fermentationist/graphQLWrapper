const {
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
} = require("graphql");

const contactFields = {    
    id: {
        type: GraphQLID,
    },
    firstName: {
        type: GraphQLString,
    },
    lastName: {
        type: GraphQLString,
    },
    email: {
        type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
        type: GraphQLString,
    },
    cdate: {
        type: GraphQLString,
    },
    udate: {
        type: GraphQLString,
    },
    orgid: {
        type: GraphQLID,
    },
    orgname: {
        type: GraphQLString,
    },
    segmentio_id: {
        type: GraphQLString,
    },
    bounced_hard: {
        type: GraphQLString,
    },
    bounced_soft: {
        type: GraphQLString,
    },
    bounced_date: {
        type: GraphQLString,
    },
    ip: {
        type: GraphQLString,
    },
    ua: {
        type: GraphQLString,
    },
    hash: {
        type: GraphQLString,
    },
    socialdata_lastcheck: {
        type: GraphQLString,
    },
    email_local: {
        type: GraphQLString,
    },
    email_domain: {
        type: GraphQLString,
    },
    sentcnt: {
        type: GraphQLString,
    },
    rating_tstamp: {
        type: GraphQLString,
    },
    gravatar: {
        type: GraphQLString,
    },
    deleted: {
        type: GraphQLString,
    },
    anonymized: {
        type: GraphQLString,
    },
    adate: {
        type: GraphQLString,
    },
    udate: {
        type: GraphQLString,
    },
    deleted_at: {
        type: GraphQLString,
    },
    created_utc_timestamp: {
        type: GraphQLString,
    },
    updated_utc_timestamp: {
        type: GraphQLString,
    },
    contactAutomations: {
        type: GraphQLList(GraphQLString),
    },
    contactLists: {
        type: GraphQLList(GraphQLString),
    },
    fieldValues: {
        type: GraphQLList(GraphQLString),
    },
    geoIps: {
        type: GraphQLList(GraphQLString),
    },
    deals: {
        type: GraphQLList(GraphQLString),
    },
    accountContacts: {
        type: GraphQLList(GraphQLString),
    }}
module.exports = contactFields;