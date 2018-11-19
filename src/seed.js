import monsterData from "../data/monsters.json"
import camelcaseKeys from "camelcase-keys"
import db from "./db/db"
import { seedMonsters } from "./db/models/Monster"

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
  console.log("mongodb connected!")
})

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
    challenge,
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
    challenge: parseInt(challenge),
    traits,
    actions,
    locations: ["any"]
  }
})

async function seedDatabase() {
  await db.dropCollection("monsters")
  const seededMonsters = await seedMonsters(monsters)
  console.log(`${seededMonsters.length} monsters created`)

  db.close()
}

seedDatabase()
