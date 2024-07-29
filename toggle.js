// Get the theme toggle switch
let themeSwitch = document.getElementById("switch");

// Toggle dark mode function
const toggleDarkMode = () => {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle("dark-mode");
}

// Add event listener to the theme toggle switch
themeSwitch.addEventListener("change", toggleDarkMode);
