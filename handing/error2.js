var fs = require('fs')
var xlsx = require('node-xlsx')

var excelName = './number.xlsx'
var list = xlsx.parse(excelName);

var excelName1 = './total0509B.xlsx'
var list1 = xlsx.parse(excelName1)


var r = []
var n = 0
var r1 = []
r1.push(['正确答案', '文本内容', '你的答案', '结果（0为错误，1位为正确）'])

function ErrorLabel(index) {
    /*
    if (index == 4) {
        error = 'Proactive_Behavior_qualifier'
        return error
    }
    if (index == 3) {
        error = 'Professionalism_qualifier'
        return error
    }
    if (index == 2) {
        error = 'Quality_Control_qualifier'
        return error
    }
    if (index == 1) {
        error = 'Recruiting_qualifier'
        return error
    }
    if (index == 0) {
        error = 'Reliability_qualifier'
        return error
    }
    if (index == 8) {
        error = 'Aggresiveness_qualifier'
        return error
    }
    if (index == 9) {
        error = 'Autonomy_qualifier'
        return error
    }
    if (index == 7) {
        error = 'Organization_qualifier'
        return error
    }
    if (index == 6) {
        error = 'Passion_qualifier'
        return error
    }
    if (index == 5) {
        error = 'Positive_Attitude_qualifier'
        return error
    }
    if (index == 10) {
        error = 'Availability_qualifier'
        return error
    }
    if (index == 11) {
        error = 'Building_Relationships_qualifier'
        return error
    }
    if (index == 12) {
        error = 'Communication_Style_qualifier'
        return error
    }
    */
    
     if (index == 0) {
         error = 'Documentation_qualifier'
         return error
     }
     if (index == 1) {
         error = 'Drive_qualifier'
         return error
     }
     if (index == 2) {
         error = 'Empathy_qualifier'
         return error
     }
     if (index == 3) {
         error = 'Execution_qualifier'
         return error
     }
     if (index == 4) {
         error = 'Feedback_qualifier'
         return error
     }

     if (index == 5) {
         error = 'Informed_Decision-Making-qualifier'
         return error
     }
     if (index == 6) {
         error = 'Innovation_qualifier'
         return error
     }
     if (index == 11) {
         error = 'Agentic_qualifier'
         return error
     }
     if (index == 10) {
         error = 'Communal_qualifier'
         return error
     }
     if (index == 9) {
         error = 'Domain_Knowledge_qualifier'
         return error
     }

     if (index == 7) {
         error = 'Learning_qualifier'
         return error
     }
     if (index == 8) {
         error ='Motivational_Ability_qualifier'
         return error
     }
}

function output(label, first, second, answer, index) {

    if (first == label) {
        n++
        if (answer[answer.length - 1][0] == 1 || answer[answer.length - 1][0] == '-') {
            //     console.log(r[i])
            r1.push([label, second, 'other', 0])
        }

        for (var j = 0; j < answer.length - 1; j++) {
            if (answer[j] != 0) {

                if (first == ErrorLabel(j)) {
                    r1.push([label, second, ErrorLabel(j), 1])
                }
                else {
                    r1.push([label, second, ErrorLabel(j), 0])
                }

            }
        }
    }
    //console.log(n)
}


number = list[0].data[0][0]


for (var j = 1; j < list1[0].data.length; j++) {
    var s1 = list1[0].data[j];
    var s2 = list1[0].data[j][0];
    //var s3 = list1[0].data[j][1];
    var s4 = list1[0].data[j][2];
    if (s2 != undefined) {
        for (var k = 4; k < s1.length; k++) {
            if (s1[k].indexOf(number) != -1) {
                r.push([s2, s4, s1[k]])
            }
            //console.log(r)
        }
    }

}


for (var i = 0; i < r.length; i++) {
    var answer = r[i][2].slice(12, r[i][2].length).split(',');
    var first = r[i][0]
    var second = r[i][1]
    output('Documentation_qualifier', first, second, answer, 0)
    output('Drive_qualifier', first, second, answer, 1)
    output('Empathy_qualifier', first, second, answer, 2)
    output('Execution_qualifier', first, second, answer, 3)
    output('Feedback_qualifier', first, second, answer, 4)

    output('Informed_Decision-Making-qualifier', first, second, answer, 5)
    output('Innovation_qualifier', first, second, answer, 6)
    output('Agentic_qualifier', first, second, answer, 11)
    output('Communal_qualifier', first, second, answer, 10)
    output('Domain_Knowledge_qualifier', first, second, answer, 9)


    output('Learning_qualifier', first, second, answer, 7)
    output('Motivational_Ability_qualifier', first, second, answer, 8)

}

var file = xlsx.build([{
    name: 'test',
    data: r1
}])
fs.writeFileSync(+number + '.xlsx', file, 'binary', { 'flag': 'w' });
console.log('finished')












