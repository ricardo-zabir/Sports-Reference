"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs/promises');
const writeOnFile = (matrix) => __awaiter(void 0, void 0, void 0, function* () {
    let stringText = "";
    for (let i = 0; i < 36; i++) {
        stringText += "-";
    }
    stringText += "\n";
    matrix.forEach((item) => {
        item.forEach((value, idx) => {
            if (typeof (value) === 'number' && value <= 9 || typeof (value) === "string" && value.length === 1) {
                stringText += "  ";
            }
            else if (typeof (value) === 'number' && value > 9 || typeof (value) === "string" && value.length === 2) {
                stringText += " ";
            }
            stringText += value;
            stringText += "|";
            if (idx === item.length - 1) {
                stringText += "\n";
            }
        });
    });
    for (let i = 0; i < 36; i++) {
        stringText += "-";
    }
    yield fs.writeFile("matrix.txt", stringText);
});
exports.default = writeOnFile;
