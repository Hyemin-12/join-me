// 비밀번호 type 변경
window.onload = () => {
    let openEye = document.getElementById('open-eye');
    if(openEye) openEye.onclick = setTypeText;
    let closeEye = document.getElementById('close-eye');
    if(closeEye) closeEye.onclick = setTypePw;
}

const setTypeText = () => {
    document.getElementById('pw').setAttribute('type', 'text');
    document.getElementById('close-eye').style.display = 'inline';
    document.getElementById('open-eye').style.display = 'none';
}

const setTypePw = () => {
    document.getElementById('pw').setAttribute('type', 'password');
    document.getElementById('open-eye').style.display = 'inline';
    document.getElementById('close-eye').style.display = 'none';
}