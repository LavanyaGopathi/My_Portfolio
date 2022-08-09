const navbarBtn = document.querySelector('.navbar_btn')
const navbarLinks = document.querySelector('.navbar_links')

navbarBtn.addEventListener('click', function() {
    let value = navbarLinks.classList.contains('navbar__collapse')
    if (value) {
        navbarLinks.classList.remove('navbar__collapse')
        navbarBtn.classList.remove('change')
    } else {
        navbarLinks.classList.add('navbar__collapse')
        navbarBtn.classList.add('change')
    }
})