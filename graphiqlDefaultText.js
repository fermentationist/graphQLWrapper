const graphiqlDefaultText = `
# uncomment one query or mutation at a time and press the 'play button' above to run it against the database

query findContact{
    contact (id:11){
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
  
  query findCampaign {
    campaign(id:1){
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
    score(id:1){
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
    }
  }
  
  mutation branding {
    updateBranding(id:1, siteLogoSmall: "https://www.dennis-hodges.com/wrong-link"){
      siteLogoSmall
    }
  }
  
  
   query getCampaignLinks {
     campaigns(id:1){
       user
       automation
       links {
         user
         automation
         campaignMessage
         links
         aggregateRevenues
       }
  
     }
   }  
`;
module.exports = graphiqlDefaultText