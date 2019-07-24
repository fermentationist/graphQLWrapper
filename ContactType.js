const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLString,
} = require("graphql");
const fetchREST = require("./fetchREST.js");
const env = process.env.NODE_ENV || "development";
const API_KEY = env === "development" ? process.env.ACTIVECAMPAIGN_API_KEY : "production env variable goes here";
const baseURL = "https://independentdeveloper1563819244.api-us1.com/api/3/";

const ContactType = new GraphQLObjectType({
    name: "Contact",
    fields: {
        id: {
            type: GraphQLID,
            resolve: (root) => {
            console.log("TCL: root", root)
                return root.id
            },
        },
        firstName: {
            type: GraphQLString,
            resolve: (root) => root.firstName,
        },
        lastName: {
            type: GraphQLString,
            resolve: (root) => root.lastName,
        },
        email: {
            type: GraphQLString,
            resolve: (root) => root.email,
        },
        // links: {
        //     type: GraphQLObjectType,
            
        // }
    },
    resolve: (root) => {
        console.log("TCL: root", root)
        // console.log("args(id?)=", id);
        return fetchREST(`contact/${root.id}`);
    }
    
});
// const ContactType = 3
module.exports = ContactType;

