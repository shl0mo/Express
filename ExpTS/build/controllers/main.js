"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hb4 = exports.hb3 = exports.hb2 = exports.hb1 = exports.bemvindo = exports.lorem = exports.index = void 0;
const index = (req, res) => {
    res.end('Welcome to Web Academy');
};
exports.index = index;
const lorem = (req, res) => {
    const number_of_paragraphs = parseInt(req.params.paragrafos);
    res.send(loremIpsum({
        count: number_of_paragraphs,
        format: 'html',
        paragraphLowerBound: 3,
        paragraphUpperBound: 15,
        random: Math.random,
        sentenceLowerBound: 5,
        sentenceUpperBound: 30,
        suffix: '<br>',
        units: 'paragraphs'
    }));
};
exports.lorem = lorem;
const bemvindo = (req, res) => {
    res.end('Bem vindo');
};
exports.bemvindo = bemvindo;
const hb1 = (req, res) => {
    res.render('hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!',
        layout: false
    });
};
exports.hb1 = hb1;
const hb2 = (req, res) => {
    res.render('main/hb2', {
        nome: 'React',
        tipo: 'library',
        poweredByNode: true,
        layout: false
    });
};
exports.hb2 = hb2;
const hb3 = (req, res) => {
    const profes = [
        { nome: 'Daivd Fernandes', sala: 1238 },
        { nome: 'Horacio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1232 }
    ];
    res.render('hb3', { profes, layout: false });
};
exports.hb3 = hb3;
const hb4 = (req, res) => {
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM toll', poweredByNodejs: true },
    ];
    res.render('hb4', { technologies, layout: false });
};
exports.hb4 = hb4;
