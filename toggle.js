
// Get the theme toggle button
let themeButton = document.getElementById("theme-button");

// Toggle dark mode function
const toggleDarkMode = () => {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle("dark-mode");
}

// Add event listener to the theme toggle button
themeButton.addEventListener("click", toggleDarkMode);
