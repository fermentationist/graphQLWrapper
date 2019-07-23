const {graphql} = require("graphql");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const graphQLHTTP = require("express-graphql");
const Schema = require("./Schema.js");

const PORT = process.env.PORT || 4000;
const env = process.env.NODE_ENV || "development";
const API_KEY = env === "development" ? process.env.ACTIVECAMPAIGN_API_KEY : "api_key_goes_here";

const app = express();
// middleware - encoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/")));

// middleware - express-graphql
app.use("/graphql", graphQLHTTP({
    schema: Schema,
    graphiql: true,
}));

app.listen(PORT, () => console.log(`Pay no attention to the graphQL server listening on http://localhost:${PORT}`));
