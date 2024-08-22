// // Set dark mode
// function setDarkMode(dark, preference) {
//   if (dark) { // Set dark mode 
//     // Set as the theme if user overriding OS preference (remove theme setting if respecting OS preference)
//     preference !== "dark" ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');
//     // Change to dark mode by adding class to <html> element 
//     document.documentElement.classList.add('dark');
//   }  else if (!dark) { // Remove dark mode 
//     // Set as the theme if user overriding OS preference (remove theme setting if respecting OS preference)
//     preference !== "light" ? localStorage.setItem('theme', 'light') : localStorage.removeItem('theme');
//     // Change to light mode by removing class from <html> element
//     document.documentElement.classList.remove('dark');
//   }
// }

// // Check if we need to add dark class from theme or OS preference
// const preference = window.matchMedia('(prefers-color-scheme: dark)'). matches ? 'dark' : 'light';
// if (localStorage.getItem('theme') === "dark" || (!('theme' in localStorage) && preference === 'dark')) {
//   setDarkMode(true, preference);
// }

// function toggleDarkMode() {
//   document.body.classList.toggle('dark-mode');
// }


// Remember user's setting 
function toggleDarkMode() {
  let isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// On page load
document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});