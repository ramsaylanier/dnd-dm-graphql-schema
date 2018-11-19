import mongoose from "mongoose"
mongoose.connect(
  "mongodb://localhost/",
  { dbName: "dnd-dm" }
)

const db = mongoose.connection

export default db
