const graphiqlDefaultText = `
# press the button to select one of the queries or mutations to run. You can add or edit queries and mutations below.

query findContact($contactID:ID!){
  contact (id:$contactID){
    email
    firstName
    lastName
  }
}

query allContacts {
  contacts {
    id
    orgid
    orgname
    firstName
    lastName
    email
  }
}

query findCampaign ($campaignID:ID!){
  campaign(id:$campaignID){
    name
    type
    user
    userid
  }
}

query allCampaigns {
  campaigns {
    name
    type
    user
    userid
  }
}

query findScore {
  score(id:11){
    name
    descript
    status
  }
}

query allScores {
  scores{
    name
    status
  }
}

query findBranding {
  branding (id:1){
    siteName, 
    siteLogoSmall
  }
}

query allBrandings {
  brandings {
    siteName
    siteLogoSmall
  }
}

## Mutations ##

mutation createContact {
  createContact(email: "emptynest@shadypines.com", lastName: "Weston", firstName: "Harry"){
    id
    cdate
    email
  }
}

mutation updateContact {
  updateContact( email: "sophiap29@shadypines.com", id: 11
	){
    lastName
    firstName
    email
  }
}

mutation deleteContact {
  deleteContact(id: 27){
    deleted_at
  }
}

mutation updateBranding {
  updateBranding(id:1, siteLogoSmall: "https://www.dennis-hodges.com/favicon.ico"){
    siteLogoSmall
    siteName
  }
}

mutation updateBrandingAgain {
  updateBranding(id:1, siteLogoSmall: "https://www.dennis-hodges.com/wrong-link"){
    siteLogoSmall
    siteName
  }
}

`;
module.exports = graphiqlDefaultText