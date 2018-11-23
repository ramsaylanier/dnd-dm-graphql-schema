import { generateEncounter } from "./encounter"
import { convertCurrency } from "./exchangeRate"
import { searchMonsters } from "./monsters"
import { ObjectScalarType } from "./helpers"

const resolverMap = {
  Query: {
    encounter(obj, { props }, context, info) {
      const encounter = generateEncounter(props)
      return encounter
    },
    exchangeRate(obj, args, context, info) {
      const conversion = convertCurrency(args)
      return conversion
    },
    searchMonsters(obj, { filter, sort }, context, info) {
      return searchMonsters({ filter, sort })
    }
  },
  ObjectScalarType: ObjectScalarType,
  OperationType: {
    EQL: "$eq",
    GT: "$gt",
    GTE: "$gte",
    IN: "$in",
    LT: "$lt",
    LTE: "$lt",
    NE: "$ne",
    NIN: "$ni"
  }
}

export default resolverMap
