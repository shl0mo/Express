import express, { Request, Response, NextFunction } from 'express'
import validateEnv from './utils/validateEnv'
import dotenv from 'dotenv'
// import morgan from 'morgan'
import logger from './middlewares/logger'
import router from './router/router'

dotenv.config()
validateEnv()

const app = express()
const PORT = process.env.PORT || 3333


app.use(logger('completo'))
app.use(router)


app.get('/', (req: Request, res: Response) => {
	res.send('Hello world!')
})

app.listen(PORT, () => {
	console.log(`Express app iniciada na porta ${PORT}.`)
})
