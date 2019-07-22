const {graphql} = require("graphql");
const app = require("express")();
const PORT = 4000;
const graphQLHTTP = require("express-graphql");
const Schema = require("./Schema.js");

app.use("/", graphQLHTTP({
    schema: Schema,
    graphiql: true,
}));

app.get("/", (req, res) => {
    console.log("ø", req.json())
    res.header("Access-Control-Allow-Origin", "*")
    return res.end(200)
})

app.listen(PORT, () => console.log(`Pay no attention to the Express app listening on PORT ${PORT}`));
console.log("huh?");

// const query = `{ hello }`;
// const query2 = `{ magic_number }`;
// graphql(Schema, query2).then(result => console.log(result));