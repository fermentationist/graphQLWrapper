const {graphql} = require("graphql");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const graphQLHTTP = require("express-graphql");
const Schema = require("./Schema.js");
const graphiqlDefaultText = require("./graphiqlDefaultText.js");
const PORT = process.env.PORT || 4000;

const app = express();
// middleware - encoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/")));

// middleware - express-graphql
app.use("/graphql", graphQLHTTP({
    schema: Schema,
    // rootValue: RootQuery,
    graphiql: {defaultQuery: graphiqlDefaultText},
}));

app.listen(PORT, () => console.log(`Pay no attention to the graphQL server listening on http://localhost:${PORT}`));
