var darkmode;

// Remember user's setting 
function toggleDarkMode() {
    let isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

    document.querySelector(".dark-mode-button").textContent = isDark ? "lighter" : "darker";
}

// On page load
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector(".dark-mode-button").textContent = "lighter";
    } else {
        document.querySelector(".dark-mode-button").textContent = "darker";
    }
});

// Add event listener to the link
document.querySelector('.dark-mode-butto').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleDarkMode();
});