import { levelToDifficultMap } from "../util/encounterUtil"

const determineXpBudget = (playerLevels, difficulty) => {
  const threshold = playerLevels.reduce((thresh, level) => {
    return (thresh += levelToDifficultMap[difficulty][level - 1])
  }, 0)

  return threshold
}

const generateEncounter = ({ playerLevels, difficulty }) => {
  const xpThreshold = determineXpBudget(playerLevels, difficulty)
  console.log(xpThreshold)
  return {
    xpThreshold
  }
}

export { generateEncounter }
