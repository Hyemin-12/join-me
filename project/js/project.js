window.onload = () => {
    let openRole = document.getElementById('role-open');
    if(openRole){
        openRole.onclick = openRolePopup;
    }
    let closeRole = document.getElementById('role-close');
    if(closeRole){
        closeRole.onclick = closeRolePopup;
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