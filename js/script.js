function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show-menu');
}

const menuIcon = document.querySelector('.menu-icon');
if (menuIcon) {
    menuIcon.addEventListener('click', toggleMenu);
}

function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

function toggleContent() {
    const content = this.nextElementSibling;
    content.classList.toggle('expanded');
}

const readMoreButtons = document.querySelectorAll('.read-more-button');
readMoreButtons.forEach(button => {
    button.addEventListener('click', toggleContent);
});
