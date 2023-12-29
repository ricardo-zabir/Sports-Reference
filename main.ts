import writeOnFile from "./writeFileAuxFunc";

const data = require("./winLossData.json");


const matrix: (number | string)[][] = [];

matrix.push(["Tm"]);

const teams: string[] = Object.keys(data);

teams.forEach((team: string) => {
    matrix[0].push(team);
    const idx: number = matrix.push([team]);
    teams.forEach((teamPlayingAgainst: string) => {
        if(team === teamPlayingAgainst) {
            matrix[idx - 1].push("--")
        }
        else {
            matrix[idx - 1].push(data[team][teamPlayingAgainst]["W"])
        }
    })
});

matrix.push([...matrix[0]])

writeOnFile(matrix);