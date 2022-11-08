window.onload = () => {
    // role 팝업
    let openRole = document.getElementById('role-open');
    if(openRole) openRole.onclick = openRolePopup;
    let closeRole = document.getElementById('role-close');
    if(closeRole) closeRole.onclick = closeRolePopup;

    // editRole 팝업
    let openEditRole = document.getElementById('edit-role-open');
    if(openEditRole) openEditRole.onclick = openEditRolePopup;
    let closeEditRole = document.getElementById('edit-role-close');
    if(closeEditRole) closeEditRole.onclick = closeEditRolePopup;
}

// role 팝업
// 팝업 열기
const openRolePopup = () => {
    document.getElementById('role-page').style.display = 'block';
}
// 팝업 닫기
const closeRolePopup = () => {
    document.getElementById('role-page').style.display = 'none';
}

// editRole 팝업
// 팝업 열기
const openEditRolePopup = () => {
    document.getElementById('edit-role-page').style.display = 'block';
    document.getElementById('role-page').style.display = 'none';
}
// 팝업 닫기
const closeEditRolePopup = () => {
    document.getElementById('edit-role-page').style.display = 'none';
    document.getElementById('role-page').style.display = 'block';
}