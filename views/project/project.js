var express = require('express');
var router = express.Router();

var db = require('../lib_login/db');

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

    if(title && date){
      db.query('INSERT INTO projectTable (title, date, value, members_name) VALUES (?, ?, ?, ?)', [title, date, value, info], function (err, result) {
        if (err) throw err;
        else res.send(`<script type="text/javascript">alert("프로젝트 생성 완료!");
                    	document.location.href="/";</script>`);
      });
    } else {
		res.send(`<script type="text/javascript">alert("입력하지 않은 정보가 있습니다!");
                    	document.location.href="/";</script>`);
	}
})

module.exports = router;