import express, { Request, Response } from 'express'
import { index } from '../controllers/main'
import { engine } from 'express-handlebars'
import { loremIpsum } from 'lorem-ipsum'

const router = express.Router()


router.get('/lorem/:paragrafos', (req: Request, res: Response) => {
	res.send(loremIpsum({
		count: parseInt(req.params.paragrafos)
	}))
})

router.get('/', index) 

router.get('/about', (req: Request, res: Response) => {
	res.send('Sobre')
})


router.get('/hb1', (req: Request, res: Response) => {
	res.render('hb1', {
		mensagem: 'Olá, você está aprendendo Express + HBS!'
	})
})

router.get('/hb2', (req: Request, res: Response) => {
	res.render('hb2', {
		poweredByNodejs: true,
		name: 'Express',
		type: 'Framework',
		layout: false,
	})
})

router.get('/hb3', (req: Request, res: Response) => {
	const profes = [
		{ nome: 'Daivd Fernandes', sala: 1238 },
		{ nome: 'Horacio Fernandes', sala: 1233 },
		{ nome: 'Edleno Moura', sala: 1236 },
		{ nome: 'Elaine Harada', sala: 1232 }
	]
	res.render('hb/hb3', { profes, layout: false })
})

router.get('/hb4', (req: Request, res: Response) => {
	const technologies = [
		{  name: 'Express', type: 'Framework', poweredByNodejs: true },
		{  name: 'Laravel', type: 'Framework', poweredByNodejs: false },
		{  name: 'React', type: 'Library', poweredByNodejs: true },
		{  name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
		{  name: 'Django', type: 'Framework', poweredByNodejs: false },
		{  name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
		{  name: 'Sequelize', type: 'ORM toll', poweredByNodejs: true },
	]
	res.render('hb4', { technologies, layout: false })
})

export default router
