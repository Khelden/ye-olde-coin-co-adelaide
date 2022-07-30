//! === HEADER STYLE ON SCROLL ===
const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
}

window.addEventListener('scroll', headerScroll);

