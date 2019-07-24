const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList
} = require("graphql");

const env = process.env.NODE_ENV || "development";
const API_KEY = env === "development" ? process.env.ACTIVECAMPAIGN_API_KEY : "production env variable goes here";
const baseURL = "https://independentdeveloper1563819244.api-us1.com/api/3/";

// const ContactType = new GraphQLObjectType({
//     name: "Contact",
//     fields: {
//         id (): {
//             type: GraphQLID,
//             resolve (idNum) {
//                 fetch(`${baseURL}?query={contact: {id: }}`)
//             }
//         },
//         firstName: {
//             type: GraphQLString
//         },
//         lastName: {
//             type: GraphQLString
//         },
//         email: {
//             type: GraphQLString
//         },
//         links: {
//             type: GraphQLObjectType,
            
//         }
//     }
// });
const ContactType = 3
module.exports = ContactType;

