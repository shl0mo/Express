"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PASTA_LOGS = process.env.PASTA_LOGS;
function logger(tipo) {
    if (tipo === 'simples') {
        return (req, res, next) => {
            const log = `${new Date().toISOString()} ${req.url} ${req.method}\n`;
            fs_1.default.appendFile(`${__dirname}/logs.txt`, log, (err) => {
                if (err)
                    throw err;
                next();
            });
        };
    }
    else {
        return (req, res, next) => {
            const log = `${new Date().toISOString()} ${req.url} ${req.method} ${req.httpVersion} ${req.get('User-Agent')}\n`;
            fs_1.default.appendFile(`${__dirname}/logs.txt`, log, (err) => {
                if (err)
                    throw err;
                next();
            });
        };
    }
}
exports.default = logger;
