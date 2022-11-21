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
    if(saveAddRole) saveAddRole.onclick = closeAddRolePopup
    
    // plus
    let plus = document.getElementById('plus');
    if(plus) plus.onclick = plusValue;

    // minus
    let minus = document.getElementById('minus');
    if(minus) minus.onclick = minusValue;

    // plus
    let addPagePlus = document.getElementById('add-page-plus');
    if(addPagePlus) addPagePlus.onclick = plusValue;

    // minus
    let addPageMinus = document.getElementById('add-page-minus');
    if(addPageMinus) addPageMinus.onclick = minusValue;

    // plus
    let editPagePlus = document.getElementById('edit-page-plus');
    if(editPagePlus) editPagePlus.onclick = plusValue;
 
    // minus
    let editPageMinus = document.getElementById('edit-page-minus');
    if(editPageMinus) editPageMinus.onclick = minusValue;

    // person 팝업
    let openPerson = document.getElementById('person-open');
    if(openPerson) openPerson.onclick = openPersonPopup;
    let closePerson = document.getElementById('person-close');
    if(closePerson) closePerson.onclick = closePersonPopup;
    let completeBtn = document.getElementById('complete-button');
    if(completeBtn) completeBtn.onclick = closePersonPopup;

    // person-card
    let closeCard = document.getElementById('close-person-card');
    if(closeCard) closeCard.onclick = closePersonCard;

    let genBtn = document.getElementById('gen-button');
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

// personCard
// 닫기
const closePersonCard = () => {
    document.getElementById('person-card').style.display = 'none';
}

// plus
const plusValue = () => {
    document.getElementsByClassName('progress-bar')[0].value += 10;
    document.getElementsByClassName('add-role-progress-bar')[0].value += 10;
    document.getElementById('progress-bar').value += 10;
}
// minus
const minusValue = () => {
    document.getElementsByClassName('progress-bar')[0].value -= 10;
    document.getElementsByClassName('add-role-progress-bar')[0].value -= 10;
    document.getElementById('progress-bar').value -= 10;
}

const addValue = () => {
    const value = document.getElementById('progress-bar').getAttribute('value');
    console.log(value);
    const inputValue = document.getElementById('value').setAttribute('value', value);
    console.log(inputValue);
}
