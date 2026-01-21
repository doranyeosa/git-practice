function toggleDarkMode() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        button.textContent = '☀️ 라이트모드';
    } else {
        button.textContent = '🌙 다크모드';
    }
}
