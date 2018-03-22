
'use strict';

const fs = require('fs');

// var message = fs.readFileSync('./answer.txt', 'utf8');
// console.log(message[0])


var readline = require('readline');
var fReadName = './test.txt';
var fRead = fs.createReadStream(fReadName);


var objReadline = readline.createInterface({
    input: fRead,
    // 这是另一种复制方式，这样on('line')里就不必再调用fWrite.write(line)，当只是纯粹复制文件时推荐使用  
    // 但文件末尾会多算一次index计数   sodino.com  
    //  output: fWrite,   
    //  terminal: true  
});

var index = 0;
let currentLine = 0;
var result = new Object();
var result1 = new Object();
var result2 = new Object();
var result3 = new Object();
var r1 = [];
objReadline.on('line', (line) => {

    index++;
    if ((/\d/).test(line[3]) == true
    ) {
        var a = line.search(/\d/)
        var b = line.search(' ')


        result[index] = {
            question: line.slice(a, b).replace(/\d\d\d\d\./, ''),
            option: '',
            answer: line.slice(b, line.length),
            difficulty: 2
        }

    }
    if ((/\d/).test(line[3]) == false &&
        (/\d/).test(line[2]) == true
    ) {
        var a = line.search(/\d/)
        var b = line.search(' ')

        result[index] = {
            question: line.slice(a, b).replace(/\d\d\d\./, ''),
            option: '',
            answer: line.slice(b, line.length),
            difficulty: 2
        }


    }

    if ((/\d/).test(line[3]) == false &&
        (/\d/).test(line[2]) == false &&
        (/\d/).test(line[1]) == true
    ) {
        var a = line.search(/\d/)
        var b = line.search(' ')

        result[index] = {
            question: line.slice(a, b).replace(/\d\d\./, ''),
            option: '',
            answer: line.slice(b, line.length),
            difficulty: 2
        }


    }
    if ((/\d/).test(line[3]) == false &&
        (/\d/).test(line[2]) == false &&
        (/\d/).test(line[1]) == false &&
        (/\d/).test(line[0]) == true) {
        var a = line.search(/\d/)
        var b = line.search(' ')

        result[index] = {
            question: line.slice(a, b).replace(/\d\./, ''),
            option: '',
            answer: line.slice(b, line.length),
            difficulty: 2
        }
        // r1.push(result[index])
    }

});

objReadline.on('close', () => {

    for (var i in result) {
        r1.push(result[i])
    }
    fs.writeFile('siji.txt', JSON.stringify(r1), 'utf-8', (err) => {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
});
