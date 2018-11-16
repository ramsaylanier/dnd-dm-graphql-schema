const makeExecutableSchema = require('graphql-tools').makeExecutableSchema
const typeDefs = require('./defs/schema.gql')
const resolvers = require('./resolvers/resolver')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

console.log(schema)

module.exports = schema