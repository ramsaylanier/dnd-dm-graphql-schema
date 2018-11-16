const generateMonsters = amount => {
  console.log("generating monsters")
  return [...Array(amount).keys()].map(i => {
    console.log("HELLLO", i)
    const level = 1
    return generateMonster(level)
  })
}

const generateMonster = level => {
  return {
    type: 'Goblin', 
    level: level,
    initiative: 11,
    weapon: 'sword',
    attack: '13',
    hitpoints: '10',
    armorclass: '11'
  }
}

const resolverMap = {
  Query: {
    battle(obj, {power}, context, info) {
      const monsters = generateMonsters(power)
      console.log(monsters)
      return monsters
    }
  }
}

export default resolverMap