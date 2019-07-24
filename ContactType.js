const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLString,
} = require("graphql");//import GraphQL types

const fetchREST = require("./fetchREST.js");

const env = process.env.NODE_ENV || "development";
const API_KEY = env === "development" ? process.env.ACTIVECAMPAIGN_API_KEY : "production env variable goes here";
const baseURL = "https://independentdeveloper1563819244.api-us1.com/api/3/";

const getContact = async (root, args) => {
    return await fetchREST(`contacts/${args.id}`).then(data => data.contact);
}

const ContactType = new GraphQLObjectType({
    name: "Contact",
    fields: {
        id: {
            type: GraphQLID,
            resolve: root => {
            console.log("TCL: root", root)
                return root.id
            },
        },
        firstName: {
            type: GraphQLString,
            resolve: root => root.firstName,
        },
        lastName: {
            type: GraphQLString,
            resolve: root => root.lastName,
        },
        email: {
            type: GraphQLString,
            resolve: root => root.email,
        },
        phone: {
            type: GraphQLString,
            resolve: root => root.phone,
        },
        cdate: {
            type: GraphQLString,
            resolve: root => root.cdate,
        },
        udate: {
            type: GraphQLString,
            resolve: root => root.udate,
        },
        orgid: {
            type: GraphQLID,
            resolve: root => root.orgid,
        },
        orgname: {
            type: GraphQLString,
            resolve: root => root.orgname,
        },
        segmentio_id: {
            type: GraphQLString,
            resolve: root => root.segmentio_id,
        },
        bounced_hard: {
            type: GraphQLString,
            resolve: root => root.bounced_hard,
        },
        bounced_soft: {
            type: GraphQLString,
            resolve: root => root.bounced_soft,
        },
        bounced_date: {
            type: GraphQLString,
            resolve: root => root.bounced_date,
        },
        ip: {
            type: GraphQLString,
            resolve: root => root.ip,
        },
        ua: {
            type: GraphQLString,
            resolve: root => root.ua,
        },
        hash: {
            type: GraphQLString,
            resolve: root => root.hash,
        },
        socialdata_lastcheck: {
            type: GraphQLString,
            resolve: root => root.socialdata_lastcheck,
        },
        email_local: {
            type: GraphQLString,
            resolve: root => root.email_local,
        },
        email_domain: {
            type: GraphQLString,
            resolve: root => root.email_domain,
        },
        sentcnt: {
            type: GraphQLString,
            resolve: root => root.sentcnt,
        },
        rating_tstamp: {
            type: GraphQLString,
            resolve: root => root.rating_tstamp,
        },
        gravatar: {
            type: GraphQLString,
            resolve: root => root.gravatar,
        },
        deleted: {
            type: GraphQLString,
            resolve: root => root.deleted,
        },
        anonymized: {
            type: GraphQLString,
            resolve: root => root.anonymized,
        },
        adate: {
            type: GraphQLString,
            resolve: root => root.adate,
        },
        udate: {
            type: GraphQLString,
            resolve: root => root.udate,
        },
        deleted_at: {
            type: GraphQLString,
            resolve: root => root.deleted_at,
        },
        created_utc_timestamp: {
            type: GraphQLString,
            resolve: root => root.created_utc_timestamp,
        },
        updated_utc_timestamp: {
            type: GraphQLString,
            resolve: root => root.updated_utc_timestamp,
        },
        contactAutomations: {
            type: GraphQLList(GraphQLString),
            resolve: root => root.contactAutomations,
        },
        contactLists: {
            type: GraphQLList(GraphQLString),
            resolve: root => root.contactLists,
        },
        fieldValues: {
            type: GraphQLList(GraphQLString),
            resolve: root => root.fieldValues,
        },
        geoIps: {
            type: GraphQLList(GraphQLString),
            resolve: root => root.geoIps,
        },
        deals: {
            type: GraphQLList(GraphQLString),
            resolve: root => root.deals,
        },
        accountContacts: {
            type: GraphQLList(GraphQLString),
            resolve: root => root.accountContacts,
        },
        // links: {
        //     type: LinkListType,
        //     args: {
        //         key: GraphQLString
        //     },
        //     resolve: root => root.links
        // }
        
    },
    
});
// const ContactType = 3
module.exports = ContactType;

