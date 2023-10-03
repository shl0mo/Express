import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const PASTA_LOGS = process.env.PASTA_LOGS

function logger(tipo: 'simples' | 'completo') {
	if (tipo === 'simples') {
		return (req: Request, res: Response, next: NextFunction) => {
			console.log(new Date().toISOString(), req.url, req.method)
			fs.writeFile('logs.txt', 'log', function (err) {
				if (err) throw err
				next()
			})
			next()
		}
	} else {
		return (req: Request, res: Response, next: NextFunction) => {
			console.log(new Date().toISOString(), req.url, req.method, req.httpVersion, req.get('User-Agent'))
			next()
		}
	}

}

export default logger
