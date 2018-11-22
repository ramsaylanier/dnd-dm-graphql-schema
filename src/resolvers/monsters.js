import Monster from "../db/models/Monster"

function searchMonsters({ filters: f }) {
  let filters = f.reduce((obj, filter) => {
    obj[filter.field] = filter.value
    return obj
  }, {})
  console.log(filters)
  return Monster.find(filters).then(r => {
    console.log(r)
    return r
  })
}

export { searchMonsters }
