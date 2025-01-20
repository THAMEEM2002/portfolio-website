// Script to toggle essay content display
document.addEventListener("DOMContentLoaded", () => {
    const essayLinks = document.querySelectorAll(".essay-link");
    const essayContent = document.getElementById("essay-content");
  
    essayLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        essayContent.textContent = link.dataset.content; // Load content from data-content
        essayContent.classList.remove("hidden"); // Show the content
      });
    });
  });
  