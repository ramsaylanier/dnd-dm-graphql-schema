import { generateEncounter } from "./encounter"
import { convertCurrency } from "./exchangeRate"

const resolverMap = {
  Query: {
    encounter(obj, args, context, info) {
      const encounter = generateEncounter(args)
      return encounter
    },
    exchangeRate(obj, args, context, info) {
      const conversion = convertCurrency(args)
      return conversion
    }
  }
}

export default resolverMap
