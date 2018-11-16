const generateMonsters = amount => {
  Range(amount).map(i => {
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
      return generateMonsters(power)
    }
  }
}