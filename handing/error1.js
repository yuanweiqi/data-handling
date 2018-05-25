var fs = require('fs')
var xlsx = require('node-xlsx')

var excelName = './number.xlsx'
var list = xlsx.parse(excelName);

var excelName1 = './total0509A.xlsx'
var list1 = xlsx.parse(excelName1)


var r = []
var n = 0
var r1 = []
r1.push(['正确答案', '文本内容', '你的答案', '结果（0为错误，1位为正确）'])

function ErrorLabel(index) {
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
    // if (index == 13){
    //     error = 'other'
    //     return error
    // }
    /*
     if (index == 13) {
         error = 'Documentation_qualifier'
         return error
     }
     if (index == 14) {
         error = 'Drive_qualifier'
         return error
     }
     if (index == 15) {
         error = 'Empathy_qualifier'
         return error
     }
     if (index == 16) {
         error = 'Execution_qualifier'
         return error
     }
     if (index == 17) {
         error = 'Feedback_qualifier'
         return error
     }
     if (index == 18) {
         error = 'Informed_Decision-Making-qualifier'
         return error
     }
     if (index == 19) {
         error = 'Innovation_qualifier'
         return error
     }
     if (index == 23) {
         error = 'Agentic_qualifier'
         return error
     }
     if (index == 24) {
         error = 'Communal_qualifier'
         return error
     }
     if (index == 22) {
         error = 'Domain_Knowledge_qualifier'
         return error
     }
     if (index == 20) {
         error = 'Learning_qualifier'
         return error
     }
     if (index == 21) {
         error ='Motivational_Ability_qualifier'
         return error
     }*/
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


number = list[0].data[21][0]


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
    output('Proactive_Behavior_qualifier', first, second, answer, 4)
    output('Professionalism_qualifier', first, second, answer, 3)
    output('Quality_Control_qualifier', first, second, answer, 2)
    output('RecReliability_qualifierruiting_qualifier', first, second, answer, 1)
    output('Reliability_qualifier', first, second, answer, 0)

    output('Aggresiveness_qualifier', first, second, answer, 8)
    output('Autonomy_qualifier', first, second, answer, 9)
    output('Organization_qualifier', first, second, answer, 7)
    output('Passion_qualifier', first, second, answer, 6)
    output('Positive_Attitude_qualifier', first, second, answer, 5)


    output('Availability_qualifier', first, second, answer, 10)
    output('Building_Relationships_qualifier', first, second, answer, 11)
    output('Communication_Style_qualifier', first, second, answer, 12)
}

var file = xlsx.build([{
    name: 'test',
    data: r1
}])
fs.writeFileSync(+number + '.xlsx', file, 'binary', { 'flag': 'w' });
console.log('finished')












