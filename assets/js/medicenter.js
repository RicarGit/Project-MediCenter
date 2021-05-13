// MENU MOBILE
const menuMobile = document.querySelector(".mobile-box");
const menuMobileContent = document.querySelector(".menu-mobile-content")

const showMenu = () => menuMobileContent.classList.toggle('animation')

menuMobile.addEventListener('click', function showMenu() {
    document.querySelector(".menu-mobile-content").classList.toggle('animation');
})


// DEPARTMENT ACCORDION
const departmentWidget = document.querySelector(".departments-widget")
const widgetDetails = document.querySelector(".departments-widget-details")
const departmentContent = document.querySelector('.departments-widget-content')

departmentWidget.addEventListener('click', function accordion() {

    widgetDetails.classList.toggle('hidden')
    departmentContent.classList.toggle('hidden');
})

