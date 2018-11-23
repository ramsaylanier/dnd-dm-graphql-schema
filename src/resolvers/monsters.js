import Monster from "../db/models/Monster"

function searchMonsters({ filter, sort }) {
  return Monster.find(filter).sort(sort)
}

export { searchMonsters }
