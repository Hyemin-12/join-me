var express = require('express');
var router = express.Router();

// 프로젝트 생성 페이지
router.get('/create', (req, res) => {
    res.sendFile(__dirname + '/createProject.html');
})

router.post('/create_progress', (req, res) => {
    let title = req.body.title;
    let date = req.body.datepicker;
    let info = req.body.info;

    res.send(title, date, info)
})

// 프로젝트 페이지
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/project.html');
})

module.exports = router;