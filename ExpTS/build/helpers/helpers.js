"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTechnologies = void 0;
const handlebars_1 = __importDefault(require("handlebars"));
function listTechnologies(technologies) {
    const list = technologies.map((technology) => `<li>${technology.name} - ${technology.type} - ${technology.poweredByNodejs}</li>`);
    return new handlebars_1.default.SafeString(`<ul>${list.join('')}</ul>`);
}
exports.listTechnologies = listTechnologies;
