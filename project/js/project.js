window.onload = () => {
    let openBtn = document.getElementsByClassName('open')[0];
    if(openBtn){
        openBtn.onclick = openRolePopup;
    }
    let closeBtn = document.getElementsByClassName('close')[0];
    if(closeBtn){
        closeBtn.onclick = closeRolePopup;
    }
}

// 팝업 열기
const openRolePopup = () => {
    document.getElementById('role-page').style.display = 'block';
}


// 팝업 닫기
const closeRolePopup = () => {
    document.getElementById('role-page').style.display = 'none';
}