var express = require('express');
var router = express.Router();

// 프로젝트 생성 페이지
router.get('/create', (req, res) => {
    res.sendFile(__dirname + '/createProject.html');
})

// 프로젝트 페이지
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/project.html');
})

router.post('/', (req, res) => {
    let title = req.body.title;
    let date = req.body.datepicker;
    let value = req.body.value;
    let info = req.body.info;

    res.render('../views/lib_login/index.html', {data : [title, date, value, info]});
})

module.exports = router;