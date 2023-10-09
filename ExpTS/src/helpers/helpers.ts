import { Technology } from './helpersTypes'

export function listTechnologies(technologies: Technology[]) {
	const list = technologies.map((technology) => `<li>${technology.name} - ${technology.type} - ${technology.poweredByNodejs}</li>`)	
	return `<ul>${list.join('')}</ul>`
}
