const express = require("express")
const cors = require("cors")
const app = express()
const config = require('./config/config')

const photoRouter = require("./routes/photoRoute")
const commentRouter = require("./routes/commentRoute")
const likeRouter = require("./routes/likeRoute")


app.use(express.json()) // for parsing application/json
app.use(cors())
app.use(express.static("uploads"))
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/", photoRouter)
app.use("/comment", commentRouter )
app.use("/like", likeRouter)

app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`))
