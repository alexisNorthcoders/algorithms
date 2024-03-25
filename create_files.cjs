const fs = require('fs');
const path = require('path');

function createFiles(functionName) {
    const folderPath = path.join(__dirname, `${functionName}`);
    fs.mkdirSync(folderPath)
    const tsFunction = `${functionName}.ts`
    const tsTest = `${functionName}.test.ts`

    const filePathF = path.join(folderPath, tsFunction);
    fs.writeFileSync(filePathF, codeFunction);
    console.log(`File created: ${filePathF}`);
    const filePathT = path.join(folderPath, tsTest);
    fs.writeFileSync(filePathT, codeTest);
    console.log(`File created: ${filePathT}`);

}

const functionName = process.argv[2];
const codeFunction = `export default function ${functionName} (){}`
const codeTest = `import ${functionName} from "./${functionName}";

describe('${functionName}', () => {
    it('', () => {
        
        expect().toBe();
    });

});`

createFiles(functionName);
