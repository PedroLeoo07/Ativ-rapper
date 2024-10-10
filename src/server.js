import express from "express"
import { config } from "dotenv"

import routes from "./routes/index.routes.js"

config()

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(routes)


app.post("/2tds1", (req, res) => {
    return res.status(709).send({ message: "Hello, 2TDS1 - Só os Devs!"})
})

app.listen(port, () => {
    console.log(`🧨 Servidor rodando em http://localhost:${port}`)
})
