import 'reflect-metadata'
import express from 'express'

import { router } from './routes'

import cors from 'cors'

import createConnection from './database'

createConnection()

export const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(1901, () => console.log("Hi! I'm server! 🎈"))
