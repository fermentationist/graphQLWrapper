const fetch = require("node-fetch");
const path = require("path");

// some constants
const INTERVAL = 5000;// 5 minutes
const DYNO_URL = process.env.NODE_ENV === "production" ? path.resolve(__dirname) : "http://localhost:4000";
console.log("path.dirname:", path.resolve(__dirname));
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