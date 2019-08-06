import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import CustomGraphiQL from "./CustomGraphiQL.js";
import vars from "./graphiqlVariables.js";
function App() {
    return (
        <div style={{height: "100vh"}}>    
            <CustomGraphiQL />
        </div>
    );
}

export default App;
