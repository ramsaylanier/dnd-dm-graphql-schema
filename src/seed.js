import monsterData from "../data/monsters.json"
import monstersWitEnvironments from "../data/monstersWithEnvironment"
import camelcaseKeys from "camelcase-keys"
import { connectDb } from "./db/db.js"
import { seedMonsters } from "./db/models/Monster"
import config from "../config"

const db = connectDb({
  host: config.db.host,
  dbName: config.db.dbName
})

const fractionStrToDecimal = str => str.split("/").reduce((p, c) => p / c)
const monsters = camelcaseKeys(monsterData).map(monster => {
  const {
    name,
    meta,
    armorClass,
    hitPoints,
    speed,
    str,
    strMod,
    dex,
    dexMod,
    con,
    conMod,
    int,
    intMod,
    wis,
    wisMod,
    cha,
    chaMod,
    savingThrows,
    skills,
    senses,
    languages,
    traits,
    damageImmunities,
    actions
  } = monster

  const stats = {
    str,
    strMod,
    dex,
    dexMod,
    con,
    conMod,
    int,
    intMod,
    wis,
    wisMod,
    cha,
    chaMod
  }

  // probably could do better than this to convert. example: 1/4 (50 XP) => 1/4 50
  const challengeRe = /(\d\/?\d?)(\s)(\()(\S+)(.+)/g
  let challengeMatch = challengeRe.exec(monster.challenge)
  const challenge = fractionStrToDecimal(challengeMatch[1])
  const challengeXp = parseInt(challengeMatch[4].replace(",", ""))
  const { environment } = monstersWitEnvironments[monster.name] || {}
  const environmentKeys = environment ? Object.keys(environment) : []

  return {
    name,
    meta,
    armorClass: parseInt(armorClass),
    armor: armorClass,
    hitPoints: parseInt(hitPoints),
    hitPointDice: hitPoints,
    speed,
    stats,
    savingThrows,
    skills,
    damageImmunities,
    senses,
    languages,
    challenge,
    challengeXp,
    traits,
    actions,
    environments: environmentKeys
  }
})

async function seedDatabase() {
  await db.dropCollection("monsters")
  console.log("monsters collection dropped")

  const seededMonsters = await seedMonsters(monsters)
  console.log(`${seededMonsters.length} monsters created`)

  await db.close()
  console.log("mongodb connection closed")
}

seedDatabase()
