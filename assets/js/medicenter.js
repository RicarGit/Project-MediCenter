const menuMobile = document.querySelector(".mobile-box");

menuMobile.addEventListener('click', function showMenu() {
    document.querySelector(".menu-mobile-content").classList.toggle('animation');
})


const departmentWidget = document.querySelector(".departments-widget");

departmentWidget.addEventListener('click', function accordion() {
    const widgetDetails = document.querySelector(".departments-widget-details");
    const departmentContent = document.querySelector('.departments-widget-content')
    widgetDetails.classList.toggle('hidden');
    departmentContent.classList.toggle('hidden');
})

