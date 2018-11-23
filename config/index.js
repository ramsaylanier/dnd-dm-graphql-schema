// config used if seeding data
const envs = {
  development: "dev",
  production: "prod",
  test: "test"
}

const env = envs[process.env.NODE_ENV || "dev"]
const envConfig = require(`./${env}.json`)

export default envConfig
