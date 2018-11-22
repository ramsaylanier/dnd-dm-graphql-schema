import { generateEncounter } from "./encounter"
import { convertCurrency } from "./exchangeRate"
import { searchMonsters } from "./monsters"

const resolverMap = {
  Query: {
    encounter(obj, args, context, info) {
      const encounter = generateEncounter(args)
      return encounter
    },
    exchangeRate(obj, args, context, info) {
      const conversion = convertCurrency(args)
      return conversion
    },
    searchMonsters(obj, { filters }, context, info) {
      return searchMonsters({ filters })
    }
  }
}

export default resolverMap
