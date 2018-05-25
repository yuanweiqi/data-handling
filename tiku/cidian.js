var fs = require('fs');
var csv = require('csv-parse');
var r = []
var n = 0
var question = []
var answer = []
var r1= {}
fs.createReadStream('/home/ywq/data/tiku/ecdict.csv')
.pipe(csv())
.on('data',function(data){
 question.push(data[0])
r.push(data[3].split(',')[0])
  answer.push(data[3].split(';')[0]) 
})
.on('end',function(){
    for(var i = 1;i<question.length;i++){
        (function(){
            
                var sL = r.length;
              
                var target= [];     //存储下标
              
                //随机4个数组下标
                for(var i = 0; i < 4; i++){
                    var rand = Math.floor( Math.random() * sL );
                    if(target.length > 0){
                        detection(target, rand);
                    }else{
                        target.push(rand);
                    }
                }
               // 检测num是否存在于arr，存在重新添加，不存在直接添加
                function detection(arr, num){
                    var repeatFlag = false;
                    for(var j = 0; j < arr.length; j++){
                        if(arr[j] == num){
                            repeatFlag = true;
                        }
                    }
                    if(repeatFlag){
                        //递归
                        arguments.callee(arr, Math.floor( Math.random() * sL ));
                    }else{
                        arr.push(num);
                    }
                }
               
                n = n+1
                r1[n] = {
                 'question': question[i],
                 'option':{
                   'A': r[target[0]],
                   'B': r[target[1]],
                   'C': r[target[2]],
                   'D': answer[i]
                 },
                 'answer': answer[i],
                 'difficulty':'0'
               } 
             console.log(r1)
                //测试,输出target
            //     for(var i=0; i<target.length; i++){
            //    //   console.log(r[target[i]]);
            //     }
              })();
    
    
       
    }
  
})



//   n = n+1
//    r[n] = {
//     'question': data[0],
//     'option':{
//       'A':'a',
//       'B':'b',
//       'C':'c',
//       'D':'d'
//     },
//     'answer': data[3].split(';')[0],
//     'difficulty':'0'
//   } 
//   // fs.writeFile('cidian.txt', JSON.stringify(r), (err, rs) => {
//   //   if (err) {
//   //     console.log(err)
//   //   } else {
//   //     console.log('finished')
//   //   }
//   // })
/*
fs.createReadStream('/home/ywq/data/tiku/ecdict.csv')
.pipe(csv())
.on('data', function (r) {
   

(function(){
    
        var sL = r.length;
      
        var target= [];     //存储下标
      
        //随机4个数组下标
        for(var i = 0; i < 4; i++){
            var rand = Math.floor( Math.random() * sL );
            if(target.length > 0){
                detection(target, rand);
            }else{
                target.push(rand);
            }
        }
       // 检测num是否存在于arr，存在重新添加，不存在直接添加
        function detection(arr, num){
            var repeatFlag = false;
            for(var j = 0; j < arr.length; j++){
                if(arr[j] == num){
                    repeatFlag = true;
                }
            }
            if(repeatFlag){
                //递归
                arguments.callee(arr, Math.floor( Math.random() * sL ));
            }else{
                arr.push(num);
            }
        }
        //console.log(target.length)
        //测试,输出target
        for(var i=0; i<target.length; i++){
       //   console.log(r[target[i]]);
        }
      })();
})
*/