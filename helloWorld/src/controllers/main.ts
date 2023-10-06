import express, { Request, Response } from 'express'

export const index = (req: Request, res: Response) => {
	res.end('Inicio')
}
