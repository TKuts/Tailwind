const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightkIcon = document.getElementById(
  "theme-toggle-light-icon"
);

// configures Tailwind to use the class option for dark mode.
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // Show light icon
  themeToggleLightkIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

// Listen for toggle btn click
themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightkIcon.classList.toggle("hidden");

  // If is set in localstorage
  if (localStorage.getItem("color-theme")) {
    // If light, make dark and save in localStorage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-them", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-them", "light");
    }
  } else {
    // If not in localStorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-them", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-them", "dark");
    }
  }
}
