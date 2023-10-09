"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const router_1 = require("./router/router");
dotenv_1.default.config();
(0, validateEnv_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
// console.log(`${__dirname}/helpers/helpers.ts`)
app.engine('handlebars', (0, express_handlebars_1.engine)({
    helpers: require(`${__dirname}/helpers/helpers.ts`)
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);
app.use((0, logger_1.default)('completo'));
app.use(router_1.router);
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
