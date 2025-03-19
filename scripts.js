// Puedes agregar interactividad aquí si es necesario
// Por ejemplo, un efecto de desplazamiento suave para los enlaces del footer
document.querySelectorAll('.footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});