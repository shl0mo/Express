import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
	res.end('Início')	
})

router.get('/about', (req: Request, res: Response) => {
	res.send('Sobre')
})

export default router
