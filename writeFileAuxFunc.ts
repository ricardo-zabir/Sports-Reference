const fs = require('fs/promises');

const writeOnFile = async (matrix: (number | string) [][]) => {
    let stringText: string = "";
    for(let i = 0; i < 36; i++) {
        stringText += "-"
    }
    stringText += "\n"
    matrix.forEach((item: (number | string)[]) => {
        item.forEach((value: string | number, idx: number) => {
            
            if(typeof(value) === 'number' && value <= 9 || typeof(value) === "string" && value.length === 1) {
                stringText += "  "
            }
            else if(typeof(value) === 'number' && value > 9 || typeof(value) === "string" && value.length === 2) {
                stringText += " "
            }
            stringText += value
            stringText += "|"
            if(idx === item.length - 1) {
                stringText += "\n"
            }
        })
    })
    for(let i = 0; i < 36; i++) {
        stringText += "-"
    }
    await fs.writeFile("matrix.txt", stringText);
}

export default writeOnFile;