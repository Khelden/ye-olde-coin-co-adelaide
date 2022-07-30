//! === HEADER STYLE ON SCROLL ===
const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
}

window.addEventListener('scroll', headerScroll);

//! === OPEN AND CLOSE MENU ON HAMBURGER ICON CLICK ===
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar_menu');
const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
}

menuToggler.addEventListener('click', toggleMenu);
