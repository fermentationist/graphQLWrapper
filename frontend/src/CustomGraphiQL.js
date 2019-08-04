import React, {Component} from "react";
import GraphiQL from "graphiql";
import defaultVariables from "./graphiqlVariables.js";
import defaultQueries from "./graphiqlDefaultText.js";
// import "./graphiql.css";
const clientDomain = process.NODE_ENV !== "production" ? "http://localhost:4000/graphql" : `${window.location.domain}/graphql`;

class CustomGraphiQL extends Component {
    constructor (props){
        super(props);
        this.state = {
            fetcher: this.defaultFetcher,
            query: this.defaultQueries,
            variables: this.defaultVariables,
            response: "",
            editorTheme: "darcula",
            
            // GraphQL Schema
            // If `undefined` is provided, an introspection query is executed
            // using the fetcher.
            schema: undefined,

        }
        this.defaultFetcher = this.defaultFetcher.bind(this);
        this.defaultQueries = defaultQueries;
        this.defaultVariables = defaultVariables;
        this.clientDomain = clientDomain;
        // console.log("TCL: CustomGraphiQL -> constructor -> this.defaultVariables", this.defaultVariables)
    }
    async defaultFetcher (graphQLParams){
        // graphQLParams.variables = defaultVariables
        console.log("TCL: CustomGraphiQL -> defaultFetcher -> graphQLParams", graphQLParams);
        return await fetch(clientDomain, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(graphQLParams)
        }).then(res => {
        console.log("TCL: CustomGraphiQL -> defaultFetcher -> res", res)
            return res.json();
        });
    }
    render () {
        return (
            <GraphiQL editorTheme="cobalt" query={this.state.query} defaultQuery={this.state.query} variables={this.state.variables}{...this.state}>
                <GraphiQL.Logo>
                    Active-Campaign API GraphQL Interface
                </GraphiQL.Logo>
                
            </GraphiQL>
        );
    }
}
export default CustomGraphiQL;