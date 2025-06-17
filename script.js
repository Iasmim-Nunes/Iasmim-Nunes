const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    toggleThemeBtn.textContent = body.classList.contains('light') ? '🌞' : '🌙';
});

function baixarCV() {
    alert("Seu download começará em breve! 🚀");
    window.open('CVTI.pdf', '_blank');
}

function alertaContato() {
    alert("Entre em contato: iasmimgabi53@gmail.com 📧");
}
