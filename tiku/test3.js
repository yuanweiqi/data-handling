
'use strict';

const fs = require('fs');
var message = fs.readFileSync('./answer.txt', 'utf8');
console.log(message)
// var s = fs.readFileSync('./1989.txt', 'utf8');
// console.log(s)
var r = [] ;
var r1 = [] ;
var result = new Object();
//console.log(data)
for(var n = 41 ; n < 71 ;n++) {
    var data = fs.readFileSync('./test.txt', 'utf8');
    if(n != 70 ){
        var a = data.indexOf(n+'.')
        var b = data.indexOf((n+1)+'.',a)
        var s = data.slice(a,b)
    }else {
        var a = data.indexOf(n+'.')
        var b = data.length;
        var s = data.slice(a,b)
    }
    r.push(s)
    // console.log(r)
}
 for(var i = 0; i<r.length;i++) {
       r[i] = r[i].replace(')',':').replace(')',':')
     
       .replace(')',':').replace(')',':');
    //   console.log(r[i])
      
      var s = r[i].search(/\d\d\./);
      var a = r[i].search('A:');
      var b = r[i].search('B:');
     var c = r[i].search("C:");
     var d = r[i].search('D:');


     var question = r[i].slice(s,a)
     var A = r[i].slice(a,b);
     var B = r[i].slice(b,c);
     var C = r[i].slice(c,d);
     var D = r[i].slice(d,r[i].length)

    result[i] = {
        question: question.replace(/\d\d\./,'').trim(),
        option : {
            A: A.trim().replace('A:',''),
            B: B.trim().replace('B:',''),
            C: C.trim().replace('C:',''),
            D: D.trim().replace('D:','')   },
        answer: message[i],
        difficulty: 3
        
    }
    
 }
 console.log(result)
for(var i in result){
    r1.push(result[i])
}
    fs.writeFile('200606.txt', JSON.stringify(r1), 'utf-8', (err) => {
            if (err) throw err;
            //console.log('It\'s saved!');
        });


