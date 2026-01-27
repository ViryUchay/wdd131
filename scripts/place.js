// scripts/place.js

document.addEventListener("DOMContentLoaded", () => {
  // Current year
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Last modified
  const modifiedSpan = document.getElementById("lastModified");
  if (modifiedSpan) {
    const lastModified = new Date(document.lastModified);
    const formatted = lastModified.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    modifiedSpan.textContent = formatted;
  }
});
