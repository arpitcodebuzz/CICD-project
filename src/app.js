import express from 'express'
import routes from './routes.js'
import cors from 'cors'

const app = express()

//allow cors from everywhere
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}))
app.use(express.json())

app.use('/',routes)

app.get('/page1', (req, res) => {
  res.send('Page 1')
})

export default app