const fetch = require("node-fetch");
const {Request, Headers} = fetch;

const env = process.env.NODE_ENV || "development";
const API_KEY = env === "development" ? process.env.ACTIVECAMPAIGN_API_KEY : "production env variable goes here";
const baseURL = "https://independentdeveloper1563819244.api-us1.com/api/3/";

const query = async (endpoint = "", args, fetchMethod = "GET") => {
    console.log("query fn called.");
    const url = `${baseURL}${endpoint}`;
    console.log("TCL: query -> url", url);
    const req = new Request(url, {
        method: fetchMethod,
        headers: new Headers({ "Api-Token": API_KEY }),
        body: args || null
    });
    return await fetch(req).then(res => {
    console.log("TCL: query -> res", res)
        return res.json();
    }).then(data => {
        console.log("ødata=", data);
        return data;
    }).catch(err => console.trace(err));
};
module.exports = query;
