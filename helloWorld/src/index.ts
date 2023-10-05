import express, { Request, Response, NextFunction } from 'express'
import { engine } from 'express-handlebars'
import validateEnv from './utils/validateEnv'
import dotenv from 'dotenv'
import logger from './middlewares/logger'
import router from './router/router'

dotenv.config()
validateEnv()

const app = express()
const PORT = process.env.PORT || 3333

// console.log(`${__dirname}/helpers/helpers.ts`)

app.engine('handlebars', engine({
	helpers: require(`${__dirname}/helpers/helpers.ts`)
}))
app.set('view engine', 'handlebars')
app.set('views', `${__dirname}/views`)

app.use(logger('completo'))
app.use(router)


app.get('/', (req: Request, res: Response) => {
	res.send('Hello world!')
})



app.listen(PORT, () => {
	console.log(`Express app iniciada na porta ${PORT}.`)
})
