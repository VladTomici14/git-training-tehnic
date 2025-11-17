document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-card");
  const card = document.getElementById("demo-card");

  if (!toggleButton || !card) {
    console.warn("Demo elements not found.");
    return;
  }

  toggleButton.addEventListener("click", () => {
    card.classList.toggle("highlight");
    toggleButton.textContent = card.classList.contains("highlight")
      ? "Remove Highlight"
      : "Toggle Highlight";
  });
});

