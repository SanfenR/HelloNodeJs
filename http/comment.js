/**
 * Created by sanfen on 16/11/15.
 */
var http = require('http');
var querystring = require('querystring');
var  buffer = require('buffer');

var postData = querystring.stringify({
    'content': '测试成功',
    'cid': 8837
});

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'PHPSESSID=phnhva20l3buqoq5j9q8f8skh7; ' +
        'imooc_uuid=1629bc90-cde7-4aad-ad29-97f4343102ab; ' +
        'imooc_isnew=1; imooc_isnew_ct=1479102723; loginstate=1; ' +
        'apsid=Q1M2ZmN2JlOGRkM2M5MzUzYmE4ZmNmNGZlMzEzOWUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjQ5NDczNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzYW5mZW5ydXhpMUAxNjMuY29tAAAAAAAAAAAAAAAAADY3YzMxMmQ0MWU4ZGZkM2QwZTc3ODMwZDU3MmVjNmQzS1EpWEtRKVg%3DNT; ' +
        'last_login_username=sanfenruxi1%40163.com; jwplayer.qualityLabel=é«æ¸; ' +
        'IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1479102728,1479175819; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1479177624; cvde=58295103294c1-32; jwplayer.volume=39',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

req = http.request(options, function (res) {
    console.log('Status: ' + res.statusCode);
    console.log('header: ' + JSON.stringify(res.headers));


    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof  chunk);
    });

    res.on('end', function () {
        console.log('评论完毕');
    });
    
});

req.on('error', function (e) {
    console.log('Error', e.message);
});


req.write(postData);
req.end();

