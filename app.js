const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session)

var authRouter = require('./views/lib_login/auth');
var authCheck = require('./views/lib_login/authCheck');
var projectRouter = require('./views/project/project');
var roleRouter = require('./views/project/role');

const app = express();
const port = 3000;

app.set('views', __dirname + '/views') // 첫 번째 인자 views는 이름 바꾸면 안됨 (두 번째는 상관 없음)
app.set('view engine', 'ejs') // view engine을 ejs로 하겠다
app.engine('html', require('ejs').renderFile) // 확장자가 html이면 ejs로 해석을 해라

app.use(express.static('./views/lib_login'));
app.use(express.static('./views/project'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: '~~~',	// 원하는 문자 입력
  resave: false,
  saveUninitialized: true,
  store:new FileStore(),
}))

app.get('/', (req, res) => {
  if (!authCheck.isOwner(req, res)) {  // 로그인 안되어있으면 로그인 페이지로 이동시킴
    res.redirect('/auth/login');
    return false;
  } else {                                      // 로그인 되어있으면 메인 페이지로 이동시킴
    res.redirect('/main');
    return false;
  }
})

// 인증 라우터
app.use('/auth', authRouter);
app.use('/project', projectRouter);
app.use('/role', roleRouter);

// 메인 페이지
app.get('/main', (req, res) => {
  if (!authCheck.isOwner(req, res)) {  // 로그인 안되어있으면 로그인 페이지로 이동시킴
    res.redirect('/auth/login');
    return false;
  }
  res.sendFile(__dirname + '/views/lib_login/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})