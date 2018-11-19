import { levelToDifficultMap } from "../util/encounterUtil"

const determineXpBudget = (playerLevels, difficulty) => {
  const threshold = playerLevels.reduce((thresh, level) => {
    return (thresh += levelToDifficultMap[difficulty][level - 1])
  }, 0)

  return threshold
}

const determineXPMultiplier = n => {
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 1.5
  } else if (n >= 3 && n <= 6) {
    return 2
  } else if (n >= 7 && n <= 10) {
    return 2.5
  } else if (n >= 11 && n <= 14) {
    return 3
  } else {
    return 4
  }
}

const generateMonstersForEncounter = ({
  xpThreshold,
  environment,
  maxMonsters
}) => {}

const generateEncounter = ({
  playerLevels,
  difficulty,
  environment,
  maxMonsters
}) => {
  const xpThreshold = determineXpBudget(playerLevels, difficulty)
  const monsters = generateMonstersForEncounter({
    xpThreshold,
    environment,
    maxMonsters
  })
  return {
    xpThreshold,
    monsters
  }
}

export { generateEncounter }
