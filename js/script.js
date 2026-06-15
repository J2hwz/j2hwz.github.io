var darkmode;

// Load header and footer
$(function(){
  $("#header").load("./header.html", function() {
    var btn = document.querySelector(".dark-mode-button");
    if (btn) btn.textContent = localStorage.getItem('darkMode') === 'enabled' ? "lighter" : "darker";
  });
  $("#footer").load("./footer.html");
});

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
    }

    // Pick a random landscape photo on each page load — add filenames here when adding new images
    var pic = document.getElementById('landscape-pic');
    if (pic) {
        var landscapes = ['landscape1.jpg', 'landscape2.jpg', 'landscape3.jpg', 'landscape4.jpg'];
        pic.src = './images/landscape/' + landscapes[Math.floor(Math.random() * landscapes.length)];
    }
});

// Add event listener to the link
document.querySelector('.dark-mode-butto').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleDarkMode();
});