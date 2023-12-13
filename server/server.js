import { join } from 'node:path'
import express from 'express'
import cors from 'cors'

const server = express()

const __filename = new URL(import.meta.url).pathname
const __dirname = join(__filename, '../')

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*'))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../index.html'))
})

export default server
