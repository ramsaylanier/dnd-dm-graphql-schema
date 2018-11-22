import typeDefs from "./defs/schema.gql"
import resolvers from "./resolvers/resolver"
import { connectDb } from "./db/db"
import "@babel/polyfill"

function makeConnectedSchema({ dbOptions }) {
  console.log("DB OPTIONS", dbOptions)
  connectDb(dbOptions)

  return {
    typeDefs,
    resolvers
  }
}

export { typeDefs, resolvers, makeConnectedSchema }
