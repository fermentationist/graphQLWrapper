const graphiqlDefaultText = `
# uncomment one query or mutation at a time and press the 'play button' above to run it against the database

# all contacts

# query {
#   contacts {
#     id
#     firstName
#     lastName
#     email
#     orgname
#   }
# }


# lookup contact by id

# query { 
# 	contact (id: 4) {
#     firstName
#     lastName
#     email
#     contactLists
#   }
# }
`;
module.exports = graphiqlDefaultText