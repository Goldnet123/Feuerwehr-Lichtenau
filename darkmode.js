document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('modeToggle');

    // Modus beim Laden prüfen
    if(localStorage.getItem('mode') === 'dark'){
        document.body.classList.add('dark-mode');
    }

    // Button klick
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')){
            localStorage.setItem('mode', 'dark');
        } else {
            localStorage.setItem('mode', 'light');
        }
    });
});
