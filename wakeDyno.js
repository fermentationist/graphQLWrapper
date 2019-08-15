const fetch = require("node-fetch");
const INTERVAL = 300000;// 5 minutes
const DYNO_URL = process.env.NODE_ENV === "production" ? __dirname : "http://localhost:4000";

// This script will run every 5 minutes to keep the heroku dyno awake and running 
const wakeDyno = () => (setInterval(() => {
    console.log(`setInteral called. Will fetch ${DYNO_URL}.`);
    fetch(DYNO_URL, () => console.log(`Calling ${DYNO_URL}...`));
}, INTERVAL));

module.exports = wakeDyno();