import express, { Request, Response } from 'express'
import { loremIpsum } from 'lorem-ipsum'

const router = express.Router()

router.get('/lorem/:paragrafos', (req: Request, res: Response) => {
	res.send(loremIpsum({
		count: parseInt(req.params.paragrafos)
	}))
})

router.get('/', (req: Request, res: Response) => {
	res.end('Início')	
})

router.get('/about', (req: Request, res: Response) => {
	res.send('Sobre')
})

export default router
