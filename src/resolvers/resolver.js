import { generateEncounter } from "./encounter"

const resolverMap = {
  Query: {
    encounter(obj, args, context, info) {
      const encounter = generateEncounter(args)
      console.log(encounter)
      return encounter
    }
  }
}

export default resolverMap
