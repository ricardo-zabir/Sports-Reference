"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const writeFileAuxFunc_1 = __importDefault(require("./writeFileAuxFunc"));
const data = require("./winLossData.json");
const matrix = [];
matrix.push(["Tm"]);
const teams = Object.keys(data);
teams.forEach((team) => {
    matrix[0].push(team);
    const idx = matrix.push([team]);
    teams.forEach((teamPlayingAgainst) => {
        if (team === teamPlayingAgainst) {
            matrix[idx - 1].push("--");
        }
        else {
            matrix[idx - 1].push(data[team][teamPlayingAgainst]["W"]);
        }
    });
});
matrix.push([...matrix[0]]);
(0, writeFileAuxFunc_1.default)(matrix);
