// config used if seeding data
const envs = {
  dev: "dev",
  production: "prod",
  test: "test"
}
const env = envs[process.env.NODE_ENV || "dev"]
const envConfig = require(`./${env}.json`)

module.exports = envConfig
