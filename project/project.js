var express = require('express');
var router = express.Router();

// 프로젝트 생성 페이지
router.get('/create', (req, res) => {
    res.sendFile(__dirname + '/createProject.html');
  })

module.exports = router;