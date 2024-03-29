const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const graphQLHTTP = require("express-graphql");
const wakeDyno = require("./wakeDyno.js");

const Schema = require("./Schema.js");
const PORT = process.env.PORT || 4000;
const clientOrigin = process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "https://active-campaign-graphql.herokuapp.com";

const app = express();
// middleware - encoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// serve static files from React app
app.use(express.static(path.join(__dirname, "/client/build")));
// middleware - enable cors
app.use(cors({origin: clientOrigin}));
// middleware - express-graphql
app.use("/graphql", graphQLHTTP({
    schema: Schema,
    graphiql: false,
}));

app.get("*", (req, res) => {
    console.log("this is being hit")
    return res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => console.log(`Pay no attention to the graphQL server listening on port:${PORT}`));
