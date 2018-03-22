var fs = require("fs")
var data = fs.readFileSync("./highSchool.txt", 'utf8');
var a = data.replace(/\"\[\{/g,'{').replace(/\}\]\"/g,'}')
        .replace(/\]\[/g,',')
    fs.writeFile('highSchool.txt', a, 'utf-8', (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });

console.log( a)