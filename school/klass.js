/**
 * Created by sanfen on 16/11/7.
 */

var student = require('./student');
var teacher = require('./teacher');

function add(teacherName, students) {
    teacher.add(teacherName);
    students.forEach(function (item, index) {
        student.add(item);
    })
}

exports.add = add;
module.exports = add;