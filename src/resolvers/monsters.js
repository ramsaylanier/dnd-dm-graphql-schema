import Monster from "../db/models/Monster"

function searchMonsters({ filter, sort }) {
  // let filters = f.reduce((obj, filter) => {
  //   obj[filter.field] = filter.value
  //   return obj
  // }, {})

  console.log(filter, sort)

  return Monster.find(filter).sort(sort)
}

export { searchMonsters }
