var fs = require('fs')
var xlsx = require('node-xlsx')

var excelName = './download/total0507/17.xlsx'
var list = xlsx.parse(excelName);

var excelName1 = './total0509A.xlsx'
var list1 = xlsx.parse(excelName1);

var n = 0;
var n1 = 0;

function handing(start, end, index) {
    for (var j = start; j < end; j++) {
        var text1 = list1[0].data[j][1]
        //   console.log(list1[0].data[start][1])
         //   console.log(list1[0].data[end-1][1])
        var answer1 = list1[0].data[j][0];
        // console.log(text1)
        if (text1.indexOf(text) != -1) {
            if ((answer1 == 1 && answer[index] != 0)) {
              //  console.log(answer1, text1, s)
                n++
            }
            //if ((answer1 == -1 && answer[index] != 0) )
              if  (answer1 == 1 && answer[index] == 0) {
                //    console.log(answer1, text1, s)
                n1++
            }

        }
    }
}

// function handing1(start, end, index) {
//     for (var j = start; j < end; j++) {
//         var text1 = list1[0].data[j][1]
//         var answer1 = list1[0].data[j][0]
//         //    console.log(list1[0].data[start][1])
//         //    console.log(list1[0].data[end-1][1])
//         if (text1.indexOf(text) != -1) {
//             if (answer.length == 16) {
//                 if ((answer1 == 1 && answer[index] != 0)) {
//                     console.log(answer1, text1, s)
//                     n++
//                 }
//                 if ((answer1 == -1 && answer[index] != 0) ||
//                     (answer1 == 1 && answer[index] == 0)) {
//                     console.log(answer1, text1, s)
//                     n1++
//                 }
//             }
//         }
//     }
// }


for (var i = 0; i < list[0].data.length; i++) {
    var text = list[0].data[i][1];
    var s = list[0].data[i][2];
    var answer = s.slice(12, s.length).split(',');
    handing(1, 28, 4); //Proactive_Behaviorr
    handing(28, 54, 3); //Professionalism
    handing(54, 83, 2) //Quality Control
    handing(83, 111, 1)   //Recruiting
    handing(111, 137, 0)   //Reliability
    handing(137, 165, 8)   //Aggressiveness
    handing(165, 190, 9)   //Autonomy
    handing(190, 215, 7)
    handing(215, 241, 6)
    handing(241, 266, 5)
    handing(266, 292, 10)
    handing(292, 317, 11)
    handing(317, 343, 12)


   handing(343, 369, 13)
    handing(369, 395, 14)
    handing(395, 420, 15)
    handing(420, 446, 16)
    handing(446, 473, 17)
    handing(473, 499, 18)
    handing(499, 526, 19)
    handing(527, 551, 23)
    handing(551, 578, 24)
    handing(578, 604, 22)
    handing(604, 631, 20)
    handing(631, 656, 21)


//     handing(343, 369, 0)
//     handing(369, 395, 1)
//     handing(395, 420, 2)
//     handing(420, 446, 3)
//    handing(446, 473, 4)
//     handing(473, 499, 5)
//     handing(499, 526, 6)
//     handing(527, 551, 11)
//     handing(551, 578, 10)
//     handing(578, 604, 9)
//     handing(604, 631, 7)
//     handing(631, 656, 8)



}


console.log(s.slice(0, 9), n, n1, n / (n1 + n))

