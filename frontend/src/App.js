import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CustomGraphiQL from "./CustomGraphiQL.js";
import vars from "./graphiqlVariables.js";
function App() {
    return (
    <CustomGraphiQL variables={vars}>

    </CustomGraphiQL>);
}

export default App;
