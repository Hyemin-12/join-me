var express = require('express');
var router = express.Router();

// 프로젝트 생성 페이지
router.get('/create', (req, res) => {
    res.sendFile(__dirname + '/createProject.html');
})

router.post('/create_progress', function (request, response) {
    let title = request.body.title;
    let manager = request.body.manager;
    let date = request.body.datepicker;
    let info = request.body.info;

    console.log(title, manager, date, info)
})

// 프로젝트 페이지
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/project.html');
})

module.exports = router;