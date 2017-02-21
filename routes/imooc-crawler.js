/**
 * Created by sanfen on 16/11/14.
 */


var cheerio = require('cheerio');
var http = require('http');
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.learnchapter');
    // [{
    //     chapterTitle: '',
    //     videos: [
    //         title: '',
    //         id: '',
    //     ]
    // }]

    var courseData = [];
    

}

http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
      html += data;
    });

    res.on('end', function () {
        filterChapters(html);
    });

}).on('error', function () {
    console.log('获取出错');
});