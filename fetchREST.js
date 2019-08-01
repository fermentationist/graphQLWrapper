const fetch = require("node-fetch");
const {Request, Headers} = fetch;

const env = process.env.NODE_ENV || "development";
const API_KEY = process.env.ACTIVECAMPAIGN_API_KEY;
const baseURL = "https://independentdeveloper1563819244.api-us1.com/api/3/";

const query = async (endpoint = "", args, fetchMethod = "GET") => {
    const url = `${baseURL}${endpoint}`;
    const req = new Request(url, {
        method: fetchMethod,
        headers: new Headers({ "Api-Token": API_KEY }),
        body: JSON.stringify(args) || null
    });
    return await fetch(req).then(res => {
        console.log("TCL: query -> req", req)
        console.log("TCL: query -> res", res)
        return res.json();
    }).then(data => {
        return data;
    }).catch(err => console.trace(err));
};
module.exports = query;
