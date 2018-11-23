import { GraphQLScalarType } from "graphql"

const ObjectScalarType = new GraphQLScalarType({
  name: "ObjectScalarType",
  description: "Allows for custom javascript object type",
  parseValue(value) {
    console.log(value)
    return value // value from the client
  },
  serialize(value) {
    console.log("searialize", value)
    return value // value sent to the client
  },
  parseLiteral(ast) {
    console.log("ast", ast)
    return null
  }
})

export { ObjectScalarType }
