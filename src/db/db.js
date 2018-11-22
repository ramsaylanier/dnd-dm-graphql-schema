import mongoose from "mongoose"

export function connectDb({ host, dbName }) {
  mongoose.connect(
    host,
    { dbName }
  )

  const db = mongoose.connection

  db.once("open", () => {
    console.log(`connected database ${dbName} at ${host}`)
  })
  db.on("error", console.error.bind(console, "connection error:"))
  return db
}
