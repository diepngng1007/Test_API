// const http = require("node:http");
import express from 'express'
import router from './routes/product'
const app = express()
const port = 8000

app.use(express.json())

app.use("/", router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
