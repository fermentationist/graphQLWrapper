const fetch = require("node-fetch");
const path = require("path");
const url = require("url");

// some constants
const INTERVAL = 300000;// 5 minutes
const DYNO_URL = process.env.NODE_ENV === "production" ? "https://active-campaign-graphql.herokuapp.com" : "http://localhost:4000";
// This script will run every 5 minutes to keep the heroku dyno awake and running 
const wakeDyno = () => {
    setInterval(() => {
        try { 
            console.log(`setInterval called. Will fetch ${DYNO_URL}.`);
            fetch(DYNO_URL, () => console.log(`Calling ${DYNO_URL}. Dyno is woke.`));
        }
        catch (err) {
            console.log(`Error fetching ${DYNO_URL}`);
        }
    }, INTERVAL);

};

module.exports = wakeDyno();