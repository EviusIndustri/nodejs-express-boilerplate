import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
	res.json({
		status: 'success',
		data: {},
		message: `[${new Date().toISOString()}] boilerplate is running properly`
	})
})

app.listen(process.env.PORT, () => {
	console.log(`[${new Date().toISOString()}] Server listening on ${process.env.PORT}`)
})