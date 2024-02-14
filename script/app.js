const navToggleIcon = document.querySelector('.nav-toggle-icon')
const navMenu = document.querySelector('.nav__list_mobile')
let navToggleIconOpen=false;
navToggleIcon.addEventListener('click', function () {

if(navToggleIconOpen){
    navToggleIcon.classList.remove("nav-toggle-icon--open")
    navMenu.classList.remove("nav__list_mobile--open")
    navToggleIconOpen=false
}
else{
    navToggleIcon.classList.add("nav-toggle-icon--open")
    navMenu.classList.add("nav__list_mobile--open")
    navToggleIconOpen=true

}

})



