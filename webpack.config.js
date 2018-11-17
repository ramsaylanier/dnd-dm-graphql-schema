const common = require("./webpack/webpack.common")
const webpackMerge = require("webpack-merge")

const envs = {
  development: "dev",
  production: "prod",
  test: "test"
}

const env = envs[process.env.NODE_ENV || "dev"]
const envConfig = require(`./webpack/webpack.${env}.js`)
module.exports = webpackMerge(common, envConfig)
