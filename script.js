function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  // Toggle 'open' class for the menu and icon
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  // Update aria-expanded attribute for accessibility
  icon.setAttribute("aria-expanded", isOpen);
  
  // Add event listener to close menu when clicking outside
  if (isOpen) {
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (!menu.contains(event.target) && !icon.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
    icon.setAttribute("aria-expanded", false);

    // Remove the event listener once the menu is closed
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}
