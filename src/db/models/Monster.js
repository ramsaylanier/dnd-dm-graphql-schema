import mongoose from "mongoose"
import { statBlockSchema } from "./shared"
export const monsterSchema = new mongoose.Schema({
  name: String,
  meta: String,
  armorClass: Number,
  armor: String,
  hitpointDice: String,
  hitpoints: Number,
  speed: String,
  stats: statBlockSchema,
  savingThrows: String,
  skills: String,
  damageImmunities: String,
  senses: String,
  languages: String,
  challenge: Number,
  challengeXp: Number,
  traits: String,
  actions: String,
  locations: [String]
})

const Monster = mongoose.model("Monster", monsterSchema)

export function createMonster(monsterProps) {
  return Monster.create(monsterProps, (err, res) => {
    if (err) console.log(err)
    console.log(res)
    return res
  })
}

export function seedMonsters(monsters) {
  return Monster.insertMany(monsters)
}

export default Monster
