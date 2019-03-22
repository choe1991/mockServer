var express = require('express');
var router = express.Router();
const Mock = require('mockjs');
const Random = Mock.Random;
/* GET users listing. */
router.get('/', function(req, res, next) {
    var list = []
    for (var i =0;i<10;i++){
        var obj = {
            "orderNo": Random.natural(),
            "id": i+1,//起始值为 1，每次增 1
            "serviceName": Random.cword(4,7),
            'orderTime':(new Date(Random.datetime('yyyy/MM/dd  HH:mm:ss'))).getTime()/1000
        }
        list.push(obj)
    }
    

  res.send(Mock.mock({
    "status": 200,
    "data": list,
    "msg":"ok"
}));
});

module.exports = router;