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
    let saveEditRole = document.getElementById('edit-role-button');
    if(saveEditRole) saveEditRole.onclick = closeEditRolePopup;

    // addRole 팝업
    let openAddRole = document.getElementById('add-role-open');
    if(openAddRole) openAddRole.onclick = openAddRolePopup;
    let closeAddRole = document.getElementById('add-role-close');
    if(closeAddRole) closeAddRole.onclick = closeAddRolePopup;
    let saveAddRole = document.getElementById('add-role-button');
    if(saveAddRole) saveAddRole.onclick = closeAddRolePopup;

    // plus
    let plus = document.getElementById('plus');
    if(plus) plus.onclick = plusValue;

    // minus
    let minus = document.getElementById('minus');
    if(minus) minus.onclick = minusValue;
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

// addRole 팝업
// 팝업 열기
const openAddRolePopup = () => {
    document.getElementById('add-role-page').style.display = 'block';
}
// 팝업 닫기
const closeAddRolePopup = () => {
    document.getElementById('add-role-page').style.display = 'none';
}

// plus
const plusValue = () => {
    document.getElementById('progress-bar').value += 10;
    
}
// minus
const minusValue = () => {
    document.getElementById('progress-bar').value -= 10;
}