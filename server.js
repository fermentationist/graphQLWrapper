const {graphql} = require("graphql");
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const graphQLHTTP = require("express-graphql");
const Schema = require("./Schema.js");
const graphiqlDefaultText = require("./graphiqlDefaultText.js");
const graphiqlVariables = require('./graphiqlVariables.js');
const PORT = process.env.PORT || 4000;
const clientOrigin = process.NODE_ENV !== "production" ? "http://localhost:3000" : "https://active-campaign-graphql.herokuapp.com";

const app = express();
// middleware - encoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/")));

// middleware - enable cors
app.use(cors({origin: clientOrigin}));
// middleware - express-graphql
app.use("/graphql", graphQLHTTP({
    schema: Schema,
    graphiql: {
        defaultQuery: graphiqlDefaultText,
        variables: graphiqlVariables,
    },
}));

app.listen(PORT, () => console.log(`Pay no attention to the graphQL server listening on http://localhost:${PORT}`));
