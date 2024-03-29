import React from "react";
import GraphiQL from "graphiql";
import defaultVariables from "./graphiqlVariables.js";
import defaultQueries from "./graphiqlDefaultText.js";

import "./CustomGraphQL.css";

const defaultFetcher = async (graphQLParams) => {
    return await fetch("/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(graphQLParams)
    }).then(res => {
        return res.json();
    });
}

const CustomGraphiQL = props => {
    return (
        <GraphiQL editorTheme="the-matrix" fetcher={defaultFetcher} query={defaultQueries} defaultQuery={defaultQueries} variables={defaultVariables}{...props}>
            <GraphiQL.Logo>
                ActiveCampaign API GraphQL Endpoint
            </GraphiQL.Logo>
            <GraphiQL.Toolbar>
                <GraphiQL.Button
                onClick={()=> window.open("https://dennis-hodges.com")}
                label="dennis-hodges.com"
                title="Go to dennis-hodges.com"
                />
            </GraphiQL.Toolbar>
            {props.children}
        </GraphiQL>
    );
}
export default CustomGraphiQL;