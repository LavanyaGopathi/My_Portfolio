const navbarBtn = document.querySelector('.navbar_btn')
const navbarLinks = document.querySelector('.navbar_links')

navbarBtn.addEventListener('click', function() {
    let value = navbarLinks.classList.contains('navbar_collapase')
    if (value) {
        navbarLinks.classList.remove('navbar_collapase')
    } else {
        navbarLinks.classList.add('navbar_collapse')
    }
})