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

    // plus
    let plus = document.getElementById('plus');
    if(plus) plus.onclick = plusValue;

    // minus
    let minus = document.getElementById('minus');
    if(minus) minus.onclick = minusValue;

    // person 팝업
    let openPerson = document.getElementById('person-open');
    if(openPerson) openPerson.onclick = openPersonPopup;
    let closePerson = document.getElementById('person-close');
    if(closePerson) closePerson.onclick = closePersonPopup;

    let genBtn = document.getElementsByClassName('gen-button')[0];
    if(genBtn) genBtn.onclick = addValue;
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

// person 팝업
// 팝업 열기
const openPersonPopup = () => {
    document.getElementById('person-page').style.display = 'block';
}
// 팝업 닫기
const closePersonPopup = () => {
    document.getElementById('person-page').style.display = 'none';
}

// plus
const plusValue = () => {
    document.getElementById('progress-bar').value += 10;
    
}
// minus
const minusValue = () => {
    document.getElementById('progress-bar').value -= 10;
}

const addValue = () => {
    const value = document.getElementById('progress-bar').getAttribute('value');
    console.log(value);
    const inputValue = document.getElementById('value').setAttribute('value', value);
    console.log(inputValue);
}
