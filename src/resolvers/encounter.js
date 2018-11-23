import {
  levelToDifficultMap,
  getMultiplier,
  createRandomEncounterTemplate,
  getChallengeRatingFromXp
} from "../util/encounterUtil"
import Monster from "../db/models/Monster"

const determineXpBudget = (playerLevels, difficulty) => {
  const threshold = playerLevels.reduce((thresh, level) => {
    return (thresh += levelToDifficultMap[difficulty][level - 1])
  }, 0)

  return threshold
}

const generateEncounter = async ({ playerLevels, difficulty }) => {
  let monsterGroups = []
  let xpSpent = 0
  const xpBudget = determineXpBudget(playerLevels, difficulty)
  const encounterTemplate = createRandomEncounterTemplate()
  const multiplier = getMultiplier(playerLevels.length, encounterTemplate.total)
  const availableXp = xpBudget / multiplier

  while (encounterTemplate.groups[0]) {
    let targetExp = availableXp / encounterTemplate.groups.length
    let currentGroup = encounterTemplate.groups.shift()
    targetExp /= currentGroup
    let cr = getChallengeRatingFromXp(targetExp)

    const [monster] = await Monster.aggregate([
      {
        $match: {
          challengeXp: { $lte: targetExp },
          challenge: { $eq: cr }
        }
      },
      { $sample: { size: 1 } }
    ])

    xpSpent += monster.challengeXp * currentGroup

    monsterGroups.push({
      monster: monster,
      count: currentGroup
    })
  }

  return {
    xpThreshold: xpBudget,
    baseXp: xpSpent,
    totalXp: (xpSpent *= multiplier),
    multiplier: multiplier,
    groups: monsterGroups
  }
}

export { generateEncounter }
