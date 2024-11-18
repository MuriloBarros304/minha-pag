// Ajusta a rolagem para evitar sobreposição pelo menu fixo
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Verifica se o elemento existe antes de rolar
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 60; // Compensa a altura do menu fixo
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});