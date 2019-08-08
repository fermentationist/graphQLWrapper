const {
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLObjectType,
} = require("graphql");
const campaignLinkFields = require("./campaignLinkFields.js");
const campaignFields = {
    type: {
        type: GraphQLString,
    },
    userid: {
        type: GraphQLID,
    },
    segmentid: {
        type: GraphQLString,
    },
    bounceid: {
        type: GraphQLString,
    },
    realcid: {
        type: GraphQLString,
    },
    sendid: {
        type: GraphQLString,
    },
    threadid: {
        type: GraphQLString,
    },
    seriesid: {
        type: GraphQLString,
    },
    formid: {
        type: GraphQLString,
    },
    basetemplateid: {
        type: GraphQLString,
    },
    basemessageid: {
        type: GraphQLString,
    },
    addressid: {
        type: GraphQLString,
    },
    source: {
        type: GraphQLString,
    },
    name: {
        type: GraphQLString,
    },
    cdate: {
        type: GraphQLString,
    },
    mdate: {
        type: GraphQLString,
    },
    sdate: {
        type: GraphQLString,
    },
    ldate: {
        type: GraphQLString,
    },
    send_amt: {
        type: GraphQLString,
    },
    total_amt: {
        type: GraphQLString,
    },
    opens: {
        type: GraphQLString,
    },
    uniqueopens: {
        type: GraphQLString,
    },
    linkclicks: {
        type: GraphQLString,
    },
    uniquelinkclicks: {
        type: GraphQLString,
    },
    subscriberclicks: {
        type: GraphQLString,
    },
    forwards: {
        type: GraphQLString,
    },
    uniqueforwards: {
        type: GraphQLString,
    },
    hardbounces: {
        type: GraphQLString,
    },
    softbounces: {
        type: GraphQLString,
    },
    unsubscribes: {
        type: GraphQLString,
    },
    unsubreasons: {
        type: GraphQLString,
    },
    updates: {
        type: GraphQLString,
    },
    socialshares: {
        type: GraphQLString,
    },
    replies: {
        type: GraphQLString,
    },
    uniquereplies: {
        type: GraphQLString,
    },
    status: {
        type: GraphQLString,
    },
    public: {
        type: GraphQLString,
    },
    mail_transfer: {
        type: GraphQLString,
    },
    mail_send: {
        type: GraphQLString,
    },
    mail_cleanup: {
        type: GraphQLString,
    },
    mailer_log_file: {
        type: GraphQLString,
    },
    tracklinks: {
        type: GraphQLString,
    },
    tracklinksanalytics: {
        type: GraphQLString,
    },
    trackreads: {
        type: GraphQLString,
    },
    trackreadsanalytics: {
        type: GraphQLString,
    },
    analytics_campaign_name: {
        type: GraphQLString,
    },
    tweet: {
        type: GraphQLString,
    },
    facebook: {
        type: GraphQLString,
    },
    survey: {
        type: GraphQLString,
    },
    embed_images: {
        type: GraphQLString,
    },
    htmlunsub: {
        type: GraphQLString,
    },
    textunsub: {
        type: GraphQLString,
    },
    htmlunsubdata: {
        type: GraphQLString,
    },
    textunsubdata: {
        type: GraphQLString,
    },
    recurring: {
        type: GraphQLString,
    },
    willrecur: {
        type: GraphQLString,
    },
    split_type: {
        type: GraphQLString,
    },
    split_content: {
        type: GraphQLString,
    },
    split_offset: {
        type: GraphQLString,
    },
    split_offset_type: {
        type: GraphQLString,
    },
    split_winner_messageid: {
        type: GraphQLString,
    },
    split_winner_awaiting: {
        type: GraphQLString,
    },
    responder_offset: {
        type: GraphQLString,
    },
    responder_type: {
        type: GraphQLString,
    },
    responder_existing: {
        type: GraphQLString,
    },
    reminder_field: {
        type: GraphQLString,
    },
    reminder_format: {
        type: GraphQLString,
    },
    reminder_type: {
        type: GraphQLString,
    },
    reminder_offset: {
        type: GraphQLString,
    },
    reminder_offset_type: {
        type: GraphQLString,
    },
    reminder_offset_sign: {
        type: GraphQLString,
    },
    reminder_last_cron_run: {
        type: GraphQLBoolean,
    },
    activerss_interval: {
        type: GraphQLString,
    },
    activerss_url: {
        type: GraphQLString,
    },
    activerss_items: {
        type: GraphQLString,
    },
    ip4: {
        type: GraphQLString,
    },
    laststep: {
        type: GraphQLString,
    },
    managetext: {
        type: GraphQLString,
    },
    schedule: {
        type: GraphQLString,
    },
    scheduleddate: {
        type: GraphQLString,
    },
    waitpreview: {
        type: GraphQLString,
    },
    deletestamp: {
        type: GraphQLBoolean,
    },
    replysys: {
        type: GraphQLString,
    },
    links: {
        type: new GraphQLObjectType({
        name: "CampaignLinkFields",
        fields: campaignLinkFields,
    })},
    id: {
        type: GraphQLID,
    },
    user: {
        type: GraphQLString,
    },
    automation: {
        type: GraphQLBoolean,
    }
}

module.exports = campaignFields;