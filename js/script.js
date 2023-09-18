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

function filtrarConteudo() {
    const tipoConteudoSelecionado = document.getElementById("content-type").value;
    const termoPesquisa = document.getElementById("search-input").value.toLowerCase();

    const conteudoItems = document.querySelectorAll(".content-item");
    conteudoItems.forEach(item => {
        const tipoConteudo = item.getAttribute("data-tipo").toLowerCase();
        const textoConteudo = item.textContent.toLowerCase();

        const correspondeAoTipo = tipoConteudoSelecionado === "all" || tipoConteudo === tipoConteudoSelecionado;
        const correspondeAoTermo = termoPesquisa === "" || textoConteudo.includes(termoPesquisa);

        if (correspondeAoTipo && correspondeAoTermo) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

const searchButton = document.getElementById("search-button");
if (searchButton) {
    searchButton.addEventListener("click", filtrarConteudo);
}
