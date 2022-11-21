var express = require('express');
var router = express.Router();

var db = require('../lib_login/db');

router.post('/', (req, res) => {
    let title = req.body.title;
    let manager = req.body.manager;
    let date = req.body.datepicker;
    let value = req.body.value;
    let info = req.body.info;

    if(title && manager && date){
      db.query('INSERT INTO roleTable (title, manager, date, value, members_name) VALUES (?, ?, ?, ?)', [title, manager, date, value, info], function (err, result) {
        if (err) throw err;
        else res.send(`<script type="text/javascript">alert("역할 생성 완료!");
                    	document.location.href="/";</script>`);
      });
    } else {
		res.send(`<script type="text/javascript">alert("입력하지 않은 정보가 있습니다!");
                    	document.location.href="/";</script>`);
	}
})

module.exports = router;